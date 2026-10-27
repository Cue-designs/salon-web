import { UpdatePost } from "@/api/learn";

interface info {
  title: string;
  body: string;
  id: number;
}

export default async function Update(info: info) {
  const updates = await UpdatePost(info);
  const newupdates = updates;

  return (
    <button
      type="button"
      aria-label={`Edit post `}
      className="grid h-8 w-8 place-items-center text-[var(--wine)]/60 transition-colors hover:bg-[var(--butter)] hover:text-[var(--wine)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
      >
        <path
          d="m12.8 4.2 3 3M4 16l2.8-.6 9.6-9.6a1.4 1.4 0 0 0-2-2l-9.6 9.6L4 16Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </svg>
    </button>
  );
}
