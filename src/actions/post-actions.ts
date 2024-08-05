'use server'

import { db } from "@/db/drizzle"

import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createNewPost = async (title: string, description: string) => {

    await db.insert(posts).values({
        title,
        description,
    })
}

export const deletePost = async (id: number) => {
    // @ts-ignore
    await db.delete(posts).where(eq(id, posts.id))
}