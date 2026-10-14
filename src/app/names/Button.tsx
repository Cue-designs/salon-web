"use client";

import fetchPost from "@/api/learn";
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
