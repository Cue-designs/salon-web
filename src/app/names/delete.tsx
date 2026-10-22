export default function Delete({ postId }: { postId: number }) {
  return (
    <button
      type="button"
      aria-label={`Delete post ${postId}`}
      className="grid h-8 w-8 place-items-center text-[var(--tomato)]/70 transition-colors hover:bg-[var(--tomato)]/10 hover:text-[var(--tomato)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="h-3.5 w-3.5"
      >
        <path
          d="M4.5 6h11m-9.8 0 .6 9.2h6.4l.6-9.2M8 6V4.5h4V6m-3.5 2.5v4m3-4v4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
        />
      </svg>
    </button>
  );
}
