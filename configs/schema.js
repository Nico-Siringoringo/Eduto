import { pgTable, boolean, serial, varchar, json, integer, text } from "drizzle-orm/pg-core";

export const USER_TABLE=pgTable('user', {
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    isMember:boolean().default(false)
})

export const STUDY_MATERIAL_TABLE=pgTable('studyMaterial', {
    id: serial().primaryKey(),
    courseId: varchar().notNull(),
    courseType: varchar().notNull(),
    topic: varchar().notNull(),
    diffcultyLevel: varchar().default('Easy'),
    courseLayout: json(),
    createdBy: varchar().notNull(),
    status: varchar().default('Generating')
})

export const CHAPTER_NOTES_TABLE=pgTable('chapterNotes', {
    id: serial().primaryKey(),
    courseId: varchar().notNull(),
    chapterId: integer().notNull(),
    notes: text()
})

export const STUDY_TYPE_CONTENT_TABLE=pgTable('studyTypeContent', {
    id: serial().primaryKey(),
    courseId: varchar().notNull(),
    type: varchar().notNull(),
    content: json(),
    status: varchar().default('Generating')
})