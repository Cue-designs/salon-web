"use client";

import fetchPost from "@/api/learn";
import { DeletePost } from "@/api/learn";
import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  fetchPost();
  return (
    <>
      <button onClick={() => fetchPost()} className="p-2 bg-emerald-700">
        {children}
      </button>
    </>
  );
}
export function SubmitButton(
  { children }: { children: ReactNode },
  id: number,
) {
  fetchPost();
  return (
    <>
      <button onClick={() => DeletePost(id)} className="p-2 bg-emerald-700">
        {children}
      </button>
    </>
  );
}
