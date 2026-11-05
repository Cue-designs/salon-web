import CrudPage from "./crud";
import PostList from "./post";

export default function NamesPage() {
  return (
    <main className="min-h-screen bg-[#d8bd8a]">
      <header className="relative overflow-hidden bg-[#4f3130] text-[#f7f0e1]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8d78f]">
            Morrow Hair House · Notes & inspiration
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-normal leading-[1.05] sm:text-6xl lg:text-7xl">
            The salon
            <br />
            <span className="italic text-[#d8bd8a]">journal.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#f7f0e1]/75 sm:text-base">
            Ideas, stories, and small moments from our chair to yours. Add a
            note or take a little inspiration with you.
          </p>
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-20 hidden h-72 w-72 rounded-full border border-[#d8bd8a]/20 sm:block lg:right-[10%]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-12 hidden h-56 w-56 rounded-full border border-[#d8bd8a]/15 sm:block lg:right-[12%]"
        />
      </header>

      <CrudPage />
      <PostList />
    </main>
  );
}
