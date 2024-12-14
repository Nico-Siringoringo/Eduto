import { courseOutline } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { STUDY_MATERIAL_TABLE } from "@/configs/schema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId, courseType, topic, difficulty, createdBy} = await req.json();

    const PROMPT = 'Generate a complete study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficulty+' with the summary of course, list of chapters (Max 3) along with summary, include emoji icon for each chapter, topic list in each chapter all in JSON format",';

    const AiResponse  = await courseOutline.sendMessage(PROMPT)
    const AiResult = JSON.parse(AiResponse.response.text())

    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId: courseId,
        courseType: courseType,
        topic: topic,
        diffcultyLevel: difficulty,
        courseLayout: AiResult,
        createdBy: createdBy,
    }).returning({resp: STUDY_MATERIAL_TABLE})

    const result = await inngest.send({
        name: 'notes.generate',
        data: {
            course: dbResult[0].resp
        }
    })
    console.log(result)

    return NextResponse.json({result: dbResult[0]})
}