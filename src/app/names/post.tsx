import { fetchData } from "@/api/learn";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Data } from "./crud";
import DeleteButton from "./Button";
import { UpdateButton } from "./Button";

const PostList = async () => {
  const fetched = await fetchData();
  const posts = Array.isArray(fetched) ? fetched : [];

  return (
    <section
      aria-label="Posts"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#7a4c46]">
            Journal entries
          </p>
          <h1 className="mt-2 font-serif text-3xl text-[#4f3130] sm:text-4xl">
            Recent posts
          </h1>
        </div>
      </div>

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
              <h2 className="mb-3 font-serif text-2xl font-normal leading-tight text-[#4f3130] sm:text-[2rem]">
                {post.title}
              </h2>
              <p className="max-w-prose text-sm leading-7 text-[#753742] sm:text-[0.95rem]">
                {post.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PostList;
