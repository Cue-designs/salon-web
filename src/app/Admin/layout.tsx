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
    <div className="min-h-screen bg-[#fbf8f2] font-sans text-[#3e302d] md:grid md:grid-cols-[248px_minmax(0,1fr)]">
      <aside className="sticky top-0 z-10 flex flex-col border-b border-[#e9e1d6] bg-[#fffdf9] px-4 py-4 md:h-screen md:border-b-0 md:border-r md:px-[18px] md:py-7">
        <Link
          className="mb-4 flex items-center gap-2.5 self-start md:mb-14 md:mx-2"
          href="/Admin"
          aria-label="Morrow admin home"
        >
          <span className="font-serif text-[45px] italic leading-[0.8]">
            m<span className="text-[#aa5042]">.</span>
          </span>
          <span className="text-[10px] font-extrabold leading-tight tracking-[1.6px]">
            MORROW
            <small className="mt-1 block text-[7px] font-semibold tracking-[2px]">
              HAIR HOUSE
            </small>
          </span>
        </Link>

        <p className="mb-3 hidden px-2.5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#897a70] md:block">
          Workspace
        </p>
        <nav
          className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-col md:overflow-visible md:px-0"
          aria-label="Admin navigation"
        >
          {navigation.map(({ href, label, icon: Icon }, index) => (
            <Link
              className={`flex min-h-[38px] shrink-0 items-center gap-2 rounded-md px-2.5 text-[11px] font-semibold text-[#756961] transition-colors hover:bg-[#f4ede3] hover:text-[#4f3130] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa5042] md:min-h-11 md:gap-3 md:px-3 md:text-xs ${
                index === 0
                  ? "bg-[#f4ede3] font-bold text-[#4f3130]"
                  : ""
              }`}
              href={href}
              key={href}
              aria-current={index === 0 ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{label}</span>
              {label === "Bookings" && (
                <span className="ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-[#f0dfbd] px-1 text-[10px] text-[#4f3130]">
                  4
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-auto hidden items-center gap-2.5 border-t border-[#e9e1d6] pt-4 md:flex">
          <div
            className="grid h-[35px] w-[35px] shrink-0 place-items-center rounded-full bg-[#753742] font-serif text-[17px] text-[#f0dfbd]"
            aria-hidden="true"
          >
            M
          </div>
          <div className="grid gap-0.5 text-[10px]">
            <strong className="text-[11px]">Morrow team</strong>
            <span className="text-[#897a70]">Administrator</span>
          </div>
          <span
            className="ml-auto h-[7px] w-[7px] rounded-full bg-[#68815c]"
            aria-label="Online"
          />
        </div>
      </aside>

      <div className="min-w-0">
        <header className="flex min-h-[58px] items-center justify-between gap-5 border-b border-[#e9e1d6] bg-[#fffdf9] px-4 sm:px-5 md:min-h-[70px] md:px-[clamp(22px,4vw,56px)]">
          <div className="flex items-center gap-2 text-[10px] text-[#897a70] md:gap-[11px] md:text-[11px]">
            <span>Workspace</span>
            <span aria-hidden="true">/</span>
            <strong className="text-[#3e302d]">Overview</strong>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <span className="hidden items-center gap-[7px] text-[10px] font-bold text-[#617752] sm:flex before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#789366] before:content-['']">
              Salon is open
            </span>
            <button
              className="relative grid h-[34px] w-[34px] place-items-center rounded-full border border-[#e9e1d6] text-[#3e302d] transition-colors hover:bg-[#f4ede3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa5042]"
              type="button"
              aria-label="Notifications"
            >
              <FiBell className="h-[15px] w-[15px]" aria-hidden="true" />
              <span className="absolute right-[7px] top-[7px] h-[5px] w-[5px] rounded-full border border-[#fffdf9] bg-[#aa5042]" />
            </button>
            <Link
              className="inline-flex items-center gap-1.5 border-b border-[#c8b7a3] py-[7px] text-[9px] font-bold transition-colors hover:text-[#aa5042] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa5042] md:text-[10px]"
              href="/"
            >
              View site <FiArrowUpRight className="h-[13px] w-[13px]" aria-hidden="true" />
            </Link>
          </div>
        </header>

        <main className="mx-auto min-h-[calc(100svh-130px)] w-full max-w-[1440px] p-5 sm:p-6 md:min-h-[calc(100svh-70px)] md:p-[clamp(24px,4vw,54px)]">
          {children}
        </main>
      </div>
    </div>
  );
}