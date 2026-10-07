"use client";

import { useState } from "react";
import { lookbookItems } from "@/lib/site-data";

const filters = ["Everything", "Cuts", "Colour", "Texture"];

export default function LookbookGallery() {
  const [filter, setFilter] = useState("Everything");
  const items =
    filter === "Everything"
      ? lookbookItems
      : lookbookItems.filter((item) => item.category === filter);

  return (
    <>
      <div
        className="filter-row lookbook-filters"
        aria-label="Filter lookbook by style"
      >
        {filters.map((item) => (
          <button
            className={`filter-chip ${filter === item ? "is-selected" : ""}`}
            type="button"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
        <span className="filter-count">
          A living moodboard · {items.length} looks
        </span>
      </div>
      <div className="lookbook-grid">
        {items.map((item, index) => (
          <article
            className={`lookbook-card ${index % 4 === 1 ? "lookbook-card-tall" : ""}`}
            key={item.title}
          >
            {/* IMAGE PLACEHOLDER: Replace CSS artwork with a real client lookbook photograph. */}
            <div className={`lookbook-art ${item.className}`}>
              <span className="lookbook-art-shape" />
              <span className="lookbook-art-stamp">
                MM · {item.category.toUpperCase()}
              </span>
            </div>
            <div className="lookbook-caption">
              <div>
                <span>{item.category} · MORROW, PORTLAND</span>
                <h2>{item.title}</h2>
                <p>{item.note}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
