"use client";

import { fetchData } from "@/api/learn";
import { useState, useEffect } from "react";
import type { Data } from "../crud";

const Articlepage = () => {
  const [search, setSearch] = useState("");
  const [articlePosts, setArticlePosts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    async function loadData() {
      try {
        const fetched = await fetchData();
        setArticlePosts(Array.isArray(fetched) ? fetched : []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        return { message: `Unable to get article  ` };
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter items based on the search query
  const filteredItems = articlePosts.filter((item: Data) => {
    if (!item) return false;
    const query = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.body.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return <div className="px-6 py-16 text-center">Loading articles...</div>;
  }

  return (
    <div className="px-6 py-16 sm:px-8 sm:py-24">
      <nav className="mb-8">
        <input
          type="search"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md rounded-lg border border-[#4f3130]/20 bg-transparent px-4 py-2 text-[#4f3130] focus:outline-none focus:ring-2 focus:ring-[#aa5042]"
        />
      </nav>

      <div>
        <div className="grid gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((article) => (
              <article
                className="group flex min-h-[18rem] flex-col justify-between rounded-[28px] border border-[#4f3130]/15 bg-[#f7f0e1] p-5 shadow-[0_12px_30px_rgba(79,49,48,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#aa5042]/30 hover:bg-[#f0e4bf] hover:shadow-[0_16px_40px_rgba(79,49,48,0.12)] sm:p-6"
                key={article.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#aa5042]" />
                    <span className="font-serif text-sm italic text-[#aa5042]">
                      Entry {article.id}
                    </span>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="mb-4 h-1 w-14 rounded-full bg-[#d1947d]" />
                  <h2 className="mb-3 font-serif text-2xl font-normal leading-tight text-[#4f3130] sm:text-[2rem]">
                    {article.title}
                  </h2>
                  <p className="max-w-prose text-sm leading-7 text-[#753742] sm:text-[0.95rem]">
                    {article.body}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center font-serif text-[#753742]">
              No articles found matching &quot;{search}&quot;.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articlepage;
