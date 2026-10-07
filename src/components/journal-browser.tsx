"use client";

import { useState } from "react";
import { journalEntries } from "@/lib/site-data";

const topics = [
  "ALL NOTES",
  "CUT NOTES",
  "COLOUR NOTES",
  "CARE NOTES",
  "THE STUDIO",
];

export default function JournalBrowser() {
  const [topic, setTopic] = useState("ALL NOTES");
  const [query, setQuery] = useState("");
  const entries = journalEntries.filter((entry) => {
    const matchesTopic = topic === "ALL NOTES" || entry.category === topic;
    const matchesQuery = `${entry.title} ${entry.excerpt} ${entry.category}`
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  return (
    <>
      <div className="journal-tools">
        <div className="journal-topics" aria-label="Filter journal by topic">
          {topics.map((item) => (
            <button
              className={topic === item ? "is-selected" : ""}
              type="button"
              aria-pressed={topic === item}
              onClick={() => setTopic(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="journal-search">
          <span aria-hidden="true">⌕</span>
          <span className="visually-hidden">Search notes</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a little something"
            type="search"
          />
        </label>
      </div>
      <div className="journal-grid" aria-live="polite">
        {entries.map((entry, index) => (
          <article className="journal-card" key={entry.title}>
            <div
              className={`journal-art journal-art-${index % 4}`}
              aria-hidden="true"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i>✳</i>
            </div>
            <div className="journal-meta">
              <span>{entry.category}</span>
              <time>{entry.date}</time>
            </div>
            <h2>{entry.title}</h2>
            <p>{entry.excerpt}</p>
            <details>
              <summary>
                Read the note <span>↗</span>
              </summary>
              <p>{entry.body}</p>
            </details>
          </article>
        ))}
        {entries.length === 0 && (
          <p className="empty-state">
            No notes match that search yet. Try a different word.
          </p>
        )}
      </div>
    </>
  );
}
