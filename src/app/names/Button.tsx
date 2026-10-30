"use client";
import { Postcontent } from "@/api/learn";
import { type ReactNode } from "react";
import { deletePost, updatePost, createPost } from "@/api/learn";

interface deletePostProp {
  children: ReactNode;
  PostId: number;
}

interface updatePostProp {
  updateprop: deletePostProp;
  title: string;
  content: string;
}

export default function DeleteButton({ children, PostId }: deletePostProp) {
  const handleDelete = async () => {
    const deleteResult = await deletePost(PostId);
    return { success: deleteResult.success, message: deleteResult.message };
  };
  return <button onClick={() => handleDelete()}>{children}</button>;
}

export function UpdateButton({
  updateprop: { children, PostId },
  title,
  content,
}: updatePostProp) {
  const hadleUpdate = async () => {
    const update = await updatePost({ PostId, title, content });
    return {
      success: update.success,
      message: update.message,
      data: update.data,
    };
  };

  return <button onClick={() => hadleUpdate()}>{children}</button>;
}

export function createButton(
  { body: { title, id, content } }: Postcontent,
  children: ReactNode,
) {
  const handleCreate = async () => {
    const createdPost = await createPost({ body: { title, id, content } });
    return {
      data: createdPost.data,
      success: createdPost.success,
      message: createdPost.message,
    };
  };

  return <button onClick={() => handleCreate()}>{children}</button>;
}
