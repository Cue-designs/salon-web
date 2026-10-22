"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";

const links = [
  { href: "/about", label: "Our story" },
  { href: "/services", label: "The menu" },
  { href: "/stylists", label: "Meet us" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/journal", label: "Field notes" },
  { href: "/visit", label: "Find us" },
  { href: "/Login", label: "Login" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement-bar">
        <span>Good hair, good energy, always.</span>
        <span className="announcement-right">
          Now welcoming new guests <span aria-hidden="true">✳</span>
        </span>
      </div>
      <header className="site-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Morrow Salon home"
          onClick={closeMenu}
        >
          <span className="wordmark-mark">
            m<span>.</span>
          </span>
          <span className="wordmark-name">
            MORROW
            <br />
            <small>HAIR HOUSE</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              className={pathname === link.href ? "active" : ""}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="nav-book" href="/book">
            Book a chair <span aria-hidden="true">↗</span>
          </Link>
          <button
            className={`menu-orbit ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="small-screen-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="rosette-graphic" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  className="rosette-petal"
                  key={index}
                  style={{ "--petal-index": index } as CSSProperties}
                />
              ))}
              <span className="rosette-core" />
            </span>
          </button>
        </div>
        <nav
          className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="small-screen-navigation"
          aria-label="Small screen navigation"
          aria-hidden={!menuOpen}
        >
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-link-index">0{index + 1}</span>
              {link.label}
              <span className="mobile-link-arrow">↗</span>
            </Link>
          ))}
          <Link className="mobile-book-link" href="/book" onClick={closeMenu}>
            Find your chair <span>↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
