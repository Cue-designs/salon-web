import Link from "next/link";
import {
  FiArrowUpRight,
  FiBell,
  FiCalendar,
  FiFileText,
  FiGrid,
  FiScissors,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import "./admin.css";

const navigation = [
  { href: "/Admin", label: "Overview", icon: FiGrid },
  { href: "/Admin/bookings", label: "Bookings", icon: FiCalendar },
  { href: "/Admin/services", label: "Services", icon: FiScissors },
  { href: "/Admin/stylists", label: "Stylists", icon: FiUsers },
  { href: "/Admin/content", label: "Content", icon: FiFileText },
  { href: "/Admin/settings", label: "Settings", icon: FiSettings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/Admin" aria-label="Morrow admin home">
          <span className="admin-brand-mark">m<span>.</span></span>
          <span className="admin-brand-name">
            MORROW
            <small>HAIR HOUSE</small>
          </span>
        </Link>

        <div className="admin-sidebar-label">Workspace</div>
        <nav className="admin-navigation" aria-label="Admin navigation">
          {navigation.map(({ href, label, icon: Icon }, index) => (
            <Link
              className={`admin-nav-link${index === 0 ? " is-active" : ""}`}
              href={href}
              key={href}
              aria-current={index === 0 ? "page" : undefined}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
              {label === "Bookings" && <span className="admin-nav-count">4</span>}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-profile-avatar" aria-hidden="true">M</div>
          <div className="admin-profile-copy">
            <strong>Morrow team</strong>
            <span>Administrator</span>
          </div>
          <span className="admin-profile-status" aria-label="Online" />
        </div>
      </aside>

      <div className="admin-workspace">
        <header className="admin-topbar">
          <div className="admin-breadcrumb">
            <span>Workspace</span>
            <span aria-hidden="true">/</span>
            <strong>Overview</strong>
          </div>
          <div className="admin-topbar-actions">
            <span className="admin-open-label">Salon is open</span>
            <button className="admin-notifications" type="button" aria-label="Notifications">
              <FiBell aria-hidden="true" />
              <span />
            </button>
            <Link className="admin-view-site" href="/">
              View site <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </header>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}