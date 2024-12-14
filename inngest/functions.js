import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE, USER_TABLE } from "@/configs/schema";
import { inngest } from "./client";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";
import { generateNotesAiModel, generateQuiz, generateStudyTypeContentAiModel } from "@/configs/AiModel";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  }
);

export const CreateNewUser = inngest.createFunction(
  { id : 'create-user'},
  { event : 'user.create'},
  async ({ event, step}) => {
    const {user} = event.data;
    // GET data
    const result = await step.run('Check User and create a new user if not in DB', async() => {
       const result = await db
         .select()
         .from(USER_TABLE)
         .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
       console.log(result);

       if (result?.length == 0) {
         const userResponse = await db
           .insert(USER_TABLE)
           .values({
             name: user?.fullName,
             email: user?.primaryEmailAddress?.emailAddress,
           })
           .returning({ id: USER_TABLE.id });
          return userResponse
       }
       return result;
    })
    return 'Success';
  }

  // Step to send email notification

);

export const GenerateNotes = inngest.createFunction(
  {id: 'generate-notes'},
  {event: 'notes.generate'},
  async({event, step}) => {
    const {course} = event.data

    const notesResult = await step.run('Generate Chapter Notes', async () => {
      const Course = course?.courseLayout?.course_name
      const Chapters = course?.courseLayout?.chapters
      let index = 0
      Chapters.forEach(async(chapter) => {
        const PROMPT =
          "Generate a course learning material based on this course: "+Course+", make detail for each chapter and topic, make sure to includes all topic, make sure to generate only in HTML (do not include HTMLKL, Head, Body, title tag), tidy up the HTML, \nThe chapters :" +JSON.stringify(chapter);
        const result = await generateNotesAiModel.sendMessage(PROMPT)
        const AiResponse = result.response.text()
        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId: index,
          courseId: course?.courseId,
          notes: AiResponse
        })
        index = index + 1
      })
      return 'Completed'
    })

    const updateCourseStatusResult = await step.run('Update Course Status to Ready', async () => {
      const result = await db.update(STUDY_MATERIAL_TABLE).set({
        status: 'Ready'
      }).where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId))
      return 'Success'
    })
  }
);

export const GenerateStudyTypeContent = inngest.createFunction(
  {id: 'generate-study-type-contents'},
  {event: 'studyType.content'},

  async({event, step}) => {
    const {studyType, prompt, courseId, recordId} = event.data

    const AIResult = await step.run('Generating ' +studyType, async () => {
      const result = studyType == 'flashcard' ? 
      await generateStudyTypeContentAiModel.sendMessage(prompt) :
      await generateQuiz.sendMessage(prompt)
      const responseClean = result.response.text().replace(/```json|```/g, '').trim()
      const AiResult = JSON.parse(responseClean)
      return AiResult
    })

    const dbResult = await step.run('Save Result to DB', async () => {
      const result = await db.update(STUDY_TYPE_CONTENT_TABLE).set({
        content: AIResult,
        status: 'Ready'
      }).where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId))

      return 'Success'
    })
  }
)