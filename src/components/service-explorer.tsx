"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { services, type ServiceCategory } from "@/lib/site-data";

const categories: ("All" | ServiceCategory)[] = [
  "All",
  "Cut",
  "Colour",
  "Care",
];

export default function ServiceExplorer() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const visibleServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <div className="filter-row" aria-label="Filter services">
        {categories.map((category) => (
          <button
            className={`filter-chip ${activeCategory === category ? "is-selected" : ""}`}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {category === "All" ? "All rituals" : category}
          </button>
        ))}
        <span className="filter-count">
          {visibleServices.length} ways to feel good
        </span>
      </div>
      <div className="service-cards">
        {visibleServices.map((service, index) => (
          <details
            className="service-detail-card"
            key={service.name}
            style={{ "--card-order": index } as CSSProperties}
          >
            <summary>
              <span className="service-card-category">
                {service.category} · {service.duration}
              </span>
              <strong>{service.name}</strong>
              <span className="service-card-price">{service.price}</span>
              <span className="service-card-toggle" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="service-card-body">
              <p>{service.description}</p>
              <Link href={`/book?service=${encodeURIComponent(service.name)}`}>
                Request this ritual <span>↗</span>
              </Link>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
