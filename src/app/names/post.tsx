import { fetchData } from "@/api/learn";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import type { Data } from "./crud";
import DeleteButton from "./Button";
import { UpdateButton } from "./Button";

const PostList = async () => {
  const fetched = await fetchData();
  const posts = Array.isArray(fetched) ? fetched : [];

  return (
    <section
      aria-labelledby="recent-posts-title"
      className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <div className="mb-8 flex items-end justify-between gap-4 border-t border-[#4f3130]/20 pt-8 sm:mb-10 sm:pt-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7a4c46]">
            Fresh from the salon
          </p>
          <h2
            id="recent-posts-title"
            className="mt-2 font-serif text-3xl text-[#4f3130] sm:text-4xl"
          >
            Recent entries
          </h2>
        </div>
        <p className="hidden text-sm text-[#753742] sm:block">
          {posts.length} {posts.length === 1 ? "story" : "stories"}
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post: Data) => (
            <article
              className="group flex min-h-[18rem] flex-col justify-between rounded-[28px] border border-[#4f3130]/15 bg-[#f7f0e1] p-5 shadow-[0_12px_30px_rgba(79,49,48,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#aa5042]/30 hover:bg-[#f0e4bf] hover:shadow-[0_16px_40px_rgba(79,49,48,0.12)] sm:p-6"
              key={post.id}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#aa5042]" />
                  <span className="font-serif text-sm italic text-[#aa5042]">
                    Entry {post.id}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <UpdateButton
                    updateprop={{
                      children: (
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4f3130]/15 bg-white/70 text-[#4f3130] shadow-sm transition hover:bg-[#d7ce8a] hover:text-[#2d1d1d]">
                          <FaEdit className="text-base" aria-hidden="true" />
                        </span>
                      ),
                      PostId: Number(post.id ?? 0),
                    }}
                    title={String(post.title ?? "")}
                    body={String(post.body ?? "")}
                  />

                  <DeleteButton PostId={Number(post.id ?? 0)}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4f3130]/15 bg-white/70 text-[#aa5042] shadow-sm transition hover:bg-[#f1c3b2] hover:text-[#652a21]">
                      <FaTrashAlt className="text-base" aria-hidden="true" />
                    </span>
                  </DeleteButton>
                </div>
              </div>

              <div className="pt-8">
                <div className="mb-4 h-1 w-14 rounded-full bg-[#d1947d]" />
                <h3 className="mb-3 font-serif text-2xl font-normal leading-tight text-[#4f3130] sm:text-[2rem]">
                  {post.title}
                </h3>
                <p className="max-w-prose whitespace-pre-wrap text-sm leading-7 text-[#753742] sm:text-[0.95rem]">
                  {post.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-[#4f3130]/25 bg-[#f7f0e1]/50 px-6 py-12 text-center">
          <p className="font-serif text-xl text-[#4f3130]">
            The journal is ready for its first story.
          </p>
          <p className="mt-2 text-sm text-[#753742]">
            Be the first to share something with the community.
          </p>
        </div>
      )}
    </section>
  );
};

export default PostList;
