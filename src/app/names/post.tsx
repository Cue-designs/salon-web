import { fetchData } from "@/api/learn";
import { Data } from "./crud";
const PostList = async () => {
  /*  const res = await fetchData();
  const fetched = Array.isArray(res) ? res : res.data || []; */
  const fetched = await fetchData();

  // Ensure it's treated as an array safely
  const posts = Array.isArray(fetched) ? fetched : [];
  return (
    <section
      aria-label="Posts"
      className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map((post: Data) => (
          <article
            className="group flex min-h-64 flex-col justify-between border border-[#4f3130]/20 bg-[#f0dfbd] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#d8d78f] hover:shadow-[0_16px_40px_rgba(79,49,48,0.12)] sm:p-8"
            key={post.id}
          >
            <span className="font-serif text-sm italic text-[#aa5042]">
              No. {post.id}
            </span>
            <div className="pt-10">
              <h2 className="mb-3 font-serif text-3xl font-normal leading-tight text-[#4f3130] sm:text-4xl">
                {post.title}
              </h2>
              <p className="max-w-prose text-sm leading-7 text-[#753742]">
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
