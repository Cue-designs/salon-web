import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "Our story" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Field notes" },
  { href: "/visit", label: "Find us" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer site-footer-wide">
      <Link
        className="footer-mark"
        href="/"
        aria-label="Morrow Hair House home"
      >
        m.
      </Link>
      <span>Good hair lives here. © 2026 Morrow Hair House.</span>
      <nav aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a href="#top" className="footer-top">
        Back to top ↑
      </a>
    </footer>
  );
}
