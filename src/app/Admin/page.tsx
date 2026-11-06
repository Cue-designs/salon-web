import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiUserPlus,
} from "react-icons/fi";

const metrics = [
  { label: "Appointments", period: "Today's schedule", icon: FiCalendar },
  { label: "Revenue", period: "This month", icon: FiDollarSign },
  { label: "New requests", period: "Awaiting confirmation", icon: FiUserPlus },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-[1080px]">
      <header className="mb-7 flex flex-col items-start justify-between gap-5 sm:mb-9 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-[9px] font-bold tracking-[1.7px] text-[#753742]">
            YOUR SALON, AT A GLANCE
          </p>
          <h1 className="font-serif text-[clamp(34px,4.7vw,54px)] font-normal leading-[1.05] tracking-[-1.5px]">
            Good to see you, <em className="text-[#753742]">Morrow team.</em>
          </h1>
          <p className="mt-3 max-w-[475px] text-xs leading-[1.7] text-[#897a70]">
            Your workspace for the people, appointments, and details that make
            Morrow special.
          </p>
        </div>
        <span className="rounded-full border border-[#e9e1d6] px-3 py-[9px] text-[9px] font-bold text-[#897a70]">
          Admin workspace
        </span>
      </header>

      <section
        className="mb-[18px] grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Salon metrics"
      >
        {metrics.map(({ label, period, icon: Icon }) => (
          <article
            className="min-h-[145px] rounded-lg border border-[#e9e1d6] bg-[#fffdf9] p-5"
            key={label}
          >
            <div className="flex items-center justify-between text-[10px] font-semibold text-[#897a70]">
              <span>{label}</span>
              <Icon className="h-4 w-4 text-[#aa5042]" aria-hidden="true" />
            </div>
            <p className="my-3 font-serif text-[34px] leading-none text-[#4f3130]">
              <span aria-label="No data available">—</span>
            </p>
            <p className="m-0 text-[9px] text-[#a3978e]">{period}</p>
          </article>
        ))}
      </section>

      <section
        className="rounded-lg border border-[#e9e1d6] bg-[#fffdf9] p-5 sm:p-[22px]"
        aria-labelledby="admin-activity-title"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-[9px] font-bold tracking-[1.7px] text-[#753742]">
              THE DAY AHEAD
            </p>
            <h2
              className="m-0 font-serif text-[26px] font-normal"
              id="admin-activity-title"
            >
              Studio activity
            </h2>
          </div>
          <span className="shrink-0 rounded-full border border-[#e9e1d6] px-2.5 py-[7px] text-[8px] font-bold text-[#897a70]">
            No data yet
          </span>
        </div>
        <div className="mt-[17px] grid min-h-[150px] content-center justify-items-center border-t border-[#e9e1d6] px-5 py-5 text-center">
          <FiClock
            className="h-6 w-6 text-[#aa5042]"
            aria-hidden="true"
          />
          <p className="mt-3 max-w-[360px] text-[11px] leading-[1.7] text-[#897a70]">
            Appointments and studio updates will appear here once your admin
            data is connected.
          </p>
        </div>
      </section>
    </div>
  );
}
