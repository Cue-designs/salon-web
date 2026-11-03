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
  body: string;
}

export default function DeleteButton({ children, PostId }: deletePostProp) {
  const handleDelete = async () => {
    const deleteResult = await deletePost(PostId);
    return { success: deleteResult.success, message: deleteResult.message };
  };

  return (
    <button
      type="button"
      onClick={() => handleDelete()}
      className="inline-flex items-center justify-center border-0 bg-transparent p-0 text-inherit outline-none transition focus-visible:ring-2 focus-visible:ring-[#aa5042] focus-visible:ring-offset-2"
      aria-label="Delete post"
    >
      {children}
    </button>
  );
}

export function UpdateButton({
  updateprop: { children, PostId },
  title,
  body,
}: updatePostProp) {
  const hadleUpdate = async () => {
    const update = await updatePost({ PostId, title, body });
    return {
      success: update.success,
      message: update.message,
      data: update.data,
    };
  };

  return (
    <button
      type="button"
      onClick={() => hadleUpdate()}
      className="inline-flex items-center justify-center border-0 bg-transparent p-0 text-inherit outline-none transition focus-visible:ring-2 focus-visible:ring-[#aa5042] focus-visible:ring-offset-2"
      aria-label="Edit post"
    >
      {children}
    </button>
  );
}

export function createButton(
  { content: { title, id, body } }: Postcontent,
  children: ReactNode,
) {
  const handleCreate = async () => {
    const createdPost = await createPost({ content: { title, id, body } });
    return {
      data: createdPost.data,
      success: createdPost.success,
      message: createdPost.message,
    };
  };

  return (
    <button
      type="button"
      onClick={() => handleCreate()}
      className="inline-flex items-center justify-center border-0 bg-transparent p-0 text-inherit outline-none transition focus-visible:ring-2 focus-visible:ring-[#aa5042] focus-visible:ring-offset-2"
      aria-label="Create post"
    >
      {children}
    </button>
  );
}
