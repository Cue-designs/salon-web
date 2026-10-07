"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { stylists } from "@/lib/site-data";

const specialties = ["Everyone", "Cut & shape", "Colour", "Texture", "Care"];

export default function StylistDirectory() {
  const [specialty, setSpecialty] = useState("Everyone");
  const matches = stylists.filter(
    (stylist) =>
      specialty === "Everyone" ||
      stylist.role.toLowerCase().includes(specialty.toLowerCase()),
  );

  return (
    <>
      <div
        className="filter-row stylist-filters"
        aria-label="Filter stylists by specialty"
      >
        {specialties.map((item) => (
          <button
            className={`filter-chip ${specialty === item ? "is-selected" : ""}`}
            type="button"
            aria-pressed={specialty === item}
            onClick={() => setSpecialty(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="stylist-grid">
        {matches.map((stylist, index) => (
          <article
            className="stylist-card"
            key={stylist.name}
            style={{ "--card-order": index } as CSSProperties}
          >
            {/* IMAGE PLACEHOLDER: Add a portrait of this stylist when studio photography is ready. */}
            <div className={`stylist-portrait ${stylist.className}`}>
              <span>{stylist.mark}</span>
              <i aria-hidden="true">✳</i>
            </div>
            <div className="stylist-card-meta">
              <span>{stylist.role}</span>
              <span>0{index + 1}</span>
            </div>
            <h2>{stylist.name}</h2>
            <p>{stylist.bio}</p>
            <Link href={`/book?stylist=${encodeURIComponent(stylist.name)}`}>
              Sit in {stylist.name.split(" ")[0]}’s chair <span>↗</span>
            </Link>
          </article>
        ))}
      </div>
      {matches.length === 0 && (
        <p className="empty-state">
          We are still finding the right person for that specialty. Ask us and
          we’ll help.
        </p>
      )}
    </>
  );
}
