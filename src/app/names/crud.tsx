type ApiPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const operations = [
  {
    method: "POST",
    name: "Create",
    detail: "Add a new post",
    color: "text-[var(--tomato)]",
  },
  {
    method: "GET",
    name: "Read",
    detail: "View all posts",
    color: "text-[var(--berry)]",
  },
  {
    method: "PATCH",
    name: "Update",
    detail: "Edit a post",
    color: "text-[var(--wine)]",
  },
  {
    method: "DELETE",
    name: "Delete",
    detail: "Remove a post",
    color: "text-[var(--tomato)]",
  },
];

export default function Crud({ posts }: { posts: ApiPost[] }) {
  const previewPost = posts[0];

  return (
    <main className="min-h-[70vh] px-5 py-12 text-[var(--wine)] sm:px-8 md:px-[5.2%] md:py-16">
      <div className="mx-auto max-w-[1240px]">
        <section className="relative mb-8 overflow-hidden bg-[var(--wine)] px-6 py-8 text-[var(--paper)] sm:px-9 sm:py-10 md:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-24 h-64 w-64 rounded-full border border-[var(--butter)]/20 sm:right-10 sm:top-[-8rem]"
          />
          <div
            aria-hidden="true"
            className="absolute right-12 top-8 hidden font-serif text-[150px] italic leading-none text-[var(--tomato)]/40 md:block"
          >
            {"{ }"}
          </div>
          <div className="relative max-w-2xl">
            <div className="mb-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[1.8px] text-[var(--citron)]">
              <span className="h-px w-7 bg-[var(--tomato)]" />
              REST API / Practice space
              <span className="border border-[var(--paper)]/30 px-2 py-1 text-[8px] tracking-[1px] text-[var(--paper)]">
                Module 01
              </span>
            </div>
            <h1 className="font-serif text-5xl font-normal leading-[0.95] tracking-[-1.5px] sm:text-6xl md:text-7xl">
              The posts
              <br />
              <em className="font-normal text-[var(--butter)]">playground.</em>
            </h1>
            <p className="mt-5 max-w-lg text-[11px] leading-6 text-[var(--paper)]/80 sm:text-xs">
              A little space to explore the four essential moves of a REST API.
              Your posts are coming in from JSONPlaceholder.
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[1px] text-[var(--citron)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--citron)]" />
            Connected to
            <code className="normal-case tracking-normal text-[var(--paper)]">
              jsonplaceholder.typicode.com
            </code>
          </div>
        </section>

        <section
          aria-label="CRUD operations"
          className="mb-8 grid grid-cols-2 gap-px border border-[var(--wine)]/15 bg-[var(--wine)]/15 sm:grid-cols-4"
        >
          {operations.map((operation, index) => (
            <div
              key={operation.name}
              className="flex min-h-28 flex-col justify-between bg-[var(--paper)] p-4 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl italic text-[var(--tomato)]/70">
                  0{index + 1}
                </span>
                <span
                  className={`font-mono text-[9px] font-bold tracking-[0.7px] ${operation.color}`}
                >
                  {operation.method}
                </span>
              </div>
              <div>
                <h2 className="font-serif text-xl leading-none">
                  {operation.name}
                </h2>
                <p className="mt-1.5 text-[9px] text-[var(--wine)]/65">
                  {operation.detail}
                </p>
              </div>
            </div>
          ))}
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_310px]">
          <section className="min-w-0 border border-[var(--wine)]/15 bg-[var(--paper)]">
            <div className="flex flex-col gap-4 border-b border-[var(--wine)]/15 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
              <div>
                <div className="mb-2 text-[8px] font-bold uppercase tracking-[1.5px] text-[var(--tomato)]">
                  GET /posts
                </div>
                <h2 className="font-serif text-3xl leading-none">Your posts</h2>
                <p className="mt-2 text-[10px] text-[var(--wine)]/65">
                  A little library of the latest records.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="sr-only" htmlFor="post-search">
                  Search posts
                </label>
                <input
                  id="post-search"
                  type="search"
                  placeholder="Search posts"
                  className="h-10 min-w-0 border border-[var(--wine)]/20 bg-transparent px-3 text-[10px] outline-none placeholder:text-[var(--wine)]/45 focus:border-[var(--tomato)] sm:w-40"
                />
                <button
                  type="button"
                  className="h-10 shrink-0 bg-[var(--wine)] px-4 text-[9px] font-bold uppercase tracking-[0.8px] text-[var(--citron)] transition-colors hover:bg-[var(--berry)]"
                >
                  <span aria-hidden="true" className="mr-2 text-sm">
                    +
                  </span>
                  New post
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--wine)]/15 text-[8px] font-bold uppercase tracking-[1.2px] text-[var(--wine)]/55">
                    <th className="px-5 py-3.5 font-bold sm:px-7">ID</th>
                    <th className="px-3 py-3.5 font-bold">Post</th>
                    <th className="px-3 py-3.5 font-bold">Description</th>
                    <th className="px-3 py-3.5 font-bold">Author</th>
                    <th className="px-5 py-3.5 text-right font-bold sm:px-7">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-b border-[var(--wine)]/10 last:border-0"
                    >
                      <td className="px-5 py-4 font-mono text-[9px] text-[var(--wine)]/55 sm:px-7">
                        #{String(post.id).padStart(3, "0")}
                      </td>
                      <td className="max-w-[210px] px-3 py-4">
                        <p className="line-clamp-1 font-serif text-base capitalize leading-tight">
                          {post.title}
                        </p>
                        <span className="mt-1 block font-mono text-[8px] text-[var(--wine)]/45">
                          POST-{String(post.id).padStart(3, "0")}
                        </span>
                      </td>
                      <td className="max-w-[230px] px-3 py-4 text-[9px] leading-5 text-[var(--wine)]/65">
                        <p className="line-clamp-2">{post.body}</p>
                      </td>
                      <td className="px-3 py-4">
                        <span className="inline-flex items-center gap-1.5 text-[9px] text-[var(--wine)]/70">
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--citron)] font-serif text-[10px]">
                            {post.userId}
                          </span>
                          User {post.userId}
                        </span>
                      </td>
                      <td className="px-5 py-4 sm:px-7">
                        <div className="flex justify-end gap-1">
                          <button
                            type="button"
                            aria-label={`Edit post ${post.id}`}
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
                          <button
                            type="button"
                            aria-label={`Delete post ${post.id}`}
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between border-t border-[var(--wine)]/15 px-5 py-3.5 text-[9px] text-[var(--wine)]/60 sm:px-7">
              <span>
                Showing <strong className="text-[var(--wine)]">{posts.length}</strong>{" "}
                posts
              </span>
              <span className="font-mono">GET · 200 OK</span>
            </div>
          </section>

          <aside className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <section className="border border-[var(--wine)]/15 bg-[var(--paper)]">
              <div className="border-b border-[var(--wine)]/15 px-5 py-4">
                <div className="mb-1 text-[8px] font-bold uppercase tracking-[1.4px] text-[var(--tomato)]">
                  POST /posts
                </div>
                <h2 className="font-serif text-2xl leading-none">
                  Create a post
                </h2>
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

            <section className="bg-[var(--wine)] p-5 text-[var(--paper)]">
              <div className="flex items-center justify-between">
                <div className="text-[8px] font-bold uppercase tracking-[1.4px] text-[var(--citron)]">
                  Response preview
                </div>
                <span className="font-mono text-[8px] text-[var(--citron)]">
                  200 OK
                </span>
              </div>
              <div className="mt-4 border-t border-[var(--paper)]/15 pt-4">
                <div className="mb-2 font-mono text-[8px] text-[var(--paper)]/50">
                  application/json
                </div>
                <pre className="overflow-hidden whitespace-pre-wrap break-words font-mono text-[9px] leading-[1.8] text-[var(--paper)]/80">
                  {JSON.stringify(
                    previewPost
                      ? {
                          id: previewPost.id,
                          title: previewPost.title,
                          body: previewPost.body,
                          userId: previewPost.userId,
                        }
                      : {},
                    null,
                    2,
                  )}
                </pre>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-[var(--paper)]/15 pt-3 text-[8px] text-[var(--citron)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--citron)]" />
                Response received
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
