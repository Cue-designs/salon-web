export default function Post() {
  return (
    <section className="border border-[var(--wine)]/15 bg-[var(--paper)]">
      <div className="border-b border-[var(--wine)]/15 px-5 py-4">
        <div className="mb-1 text-[8px] font-bold uppercase tracking-[1.4px] text-[var(--tomato)]">
          POST /posts
        </div>
        <h2 className="font-serif text-2xl leading-none">Create a post</h2>
      </div>
      <div className="space-y-3.5 p-5">
        <label className="block">
          <span className="mb-1.5 block text-[8px] font-bold uppercase tracking-[1px] text-[var(--wine)]/60">
            Title
          </span>
          <input
            type="text"
            placeholder="A thoughtful title..."
            className="h-10 w-full border border-[var(--wine)]/20 bg-transparent px-3 text-[10px] outline-none placeholder:text-[var(--wine)]/40 focus:border-[var(--tomato)]"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[8px] font-bold uppercase tracking-[1px] text-[var(--wine)]/60">
            Body
          </span>
          <textarea
            rows={3}
            placeholder="Write a few words..."
            className="w-full resize-none border border-[var(--wine)]/20 bg-transparent px-3 py-2.5 text-[10px] leading-5 outline-none placeholder:text-[var(--wine)]/40 focus:border-[var(--tomato)]"
          />
        </label>
        <button
          type="button"
          className="flex h-10 w-full items-center justify-between bg-[var(--tomato)] px-4 text-[9px] font-bold uppercase tracking-[0.8px] text-[var(--paper)] transition-colors hover:bg-[var(--berry)]"
        >
          Send POST request
          <span aria-hidden="true" className="text-sm">
            →
          </span>
        </button>
      </div>
    </section>
  );
}
