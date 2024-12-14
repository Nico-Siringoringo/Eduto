import { db } from "@/configs/db"
import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema"
import { inngest } from "@/inngest/client"
import { NextResponse } from "next/server"

export async function POST(req) {
    const {chapters, courseName, courseId, type} = await req.json()

    const PROMPT = type == 'flashcard'
    ? "Generate flashcards based on these chapters topic : " +
        chapters +
        ". Course name " +
        courseName +
        " in JSON format only with front back content, maximum 15"
      : "Generate quiz based on these chapters topic : " +
        chapters +
        ". Course name " +
        courseName +
        " in JSON format only with question and options along with correct answer, maximum 10"

    const result = await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId: courseId,
        type: type,
    }).returning({id: STUDY_TYPE_CONTENT_TABLE.id})

    inngest.send({
        name: 'studyType.content',
        data: {
            studyType: type,
            prompt: PROMPT,
            courseId: courseId,
            recordId: result[0].id
        }
    })

    return NextResponse.json(result[0].id)
}