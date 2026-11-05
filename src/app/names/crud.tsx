"use client";

import { createPost } from "@/api/learn";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export interface Data {
  [key: string]: string | undefined | number;
  title: string;
  id?: number;
  body: string;
}

export default function CrudPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get("title") ?? "").trim();
    const body = String(formData.get("body") ?? "").trim();

    if (!title || !body) {
      setFeedback({ type: "error", message: "Add a title and story before publishing." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const result = await createPost({ content: { title, body } });
      if ("success" in result && result.success === false) {
        throw new Error(result.message || "Unable to publish this entry.");
      }

      form.reset();
      setFeedback({ type: "success", message: "Your entry is now in the journal." });
      router.refresh();
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to publish this entry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="create-entry-title"
      className="mx-auto grid max-w-6xl gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-20"
    >
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7a4c46]">
          A space to share
        </p>
        <h2
          id="create-entry-title"
          className="mt-3 font-serif text-3xl leading-tight text-[#4f3130] sm:text-4xl"
        >
          Add to the journal
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#753742] sm:text-base">
          Share a little inspiration, a salon moment, or a note for the community.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 rounded-[28px] border border-[#4f3130]/15 bg-[#f7f0e1] p-6 shadow-[0_18px_50px_rgba(79,49,48,0.09)] sm:p-9"
      >
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7a4c46]">
          Entry title
          <input
            type="text"
            name="title"
            required
            maxLength={120}
            placeholder="A fresh perspective"
            className="w-full rounded-xl border border-[#4f3130]/15 bg-white/55 px-4 py-3 text-base font-normal normal-case tracking-normal text-[#4f3130] outline-none transition placeholder:text-[#753742]/50 focus:border-[#aa5042] focus:ring-2 focus:ring-[#aa5042]/15"
          />
        </label>

        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7a4c46]">
          Your story
          <textarea
            name="body"
            required
            rows={5}
            placeholder="Write something lovely..."
            className="min-h-36 w-full resize-y rounded-xl border border-[#4f3130]/15 bg-white/55 px-4 py-3 text-base font-normal leading-7 normal-case tracking-normal text-[#4f3130] outline-none transition placeholder:text-[#753742]/50 focus:border-[#aa5042] focus:ring-2 focus:ring-[#aa5042]/15"
          />
        </label>

        {feedback && (
          <p
            role={feedback.type === "error" ? "alert" : "status"}
            className={
              feedback.type === "error"
                ? "text-sm text-red-800"
                : "text-sm text-[#4d6846]"
            }
          >
            {feedback.message}
          </p>
        )}

        <div className="flex flex-col gap-3 border-t border-[#4f3130]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#753742]/75">
            Your title and story will appear in the journal below.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#4f3130] px-6 text-sm font-semibold text-[#f7f0e1] transition hover:bg-[#753742] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#aa5042] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Publishing..." : "Publish entry"}
          </button>
        </div>
      </form>
    </section>
  );
}
