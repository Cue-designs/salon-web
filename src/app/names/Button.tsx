"use client";
import { Postcontent } from "@/api/learn";
import { type ReactNode, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() =>
          startTransition(async () => {
            setError(null);
            try {
              const result = await deletePost(PostId);
              if (!result.success) {
                setError(result.message || "Could not delete this post.");
                return;
              }
              router.refresh();
            } catch (caughtError) {
              setError(
                caughtError instanceof Error
                  ? caughtError.message
                  : "Could not delete this post. Please try again.",
              );
            }
          })
        }
        disabled={isPending}
        aria-label={isPending ? "Deleting post" : "Delete post"}
        aria-busy={isPending}
        className="inline-flex items-center justify-center border-0 bg-transparent p-0 text-inherit outline-none transition focus-visible:ring-2 focus-visible:ring-[#aa5042] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
      >
        {children}
      </button>
      {error && (
        <p
          role="alert"
          className="absolute right-0 top-full z-10 mt-2 w-56 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs leading-5 text-red-800 shadow-md"
        >
          {error}
        </p>
      )}
    </div>
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
