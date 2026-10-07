"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { getWhatsAppHref, services, stylists } from "@/lib/site-data";

const times = ["9:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

export default function BookingForm() {
  const params = useSearchParams();
  const [time, setTime] = useState("");
  const [requestHref, setRequestHref] = useState("");
  const [guestName, setGuestName] = useState("");
  const [service, setService] = useState(params.get("service") ?? "");
  const [stylist, setStylist] = useState(
    params.get("stylist") ?? "Anyone on the team",
  );
  const [date, setDate] = useState("");

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const note = formData.get("note")?.toString().trim() || "No extra notes";
    const message = `Hello Morrow! I'd love to request an appointment.\n\nName: ${guestName}\nService: ${service}\nStylist: ${stylist}\nDate: ${date}\nTime: ${time}\nNote: ${note}\n\nPlease let me know what works.`;
    setRequestHref(getWhatsAppHref(message));
  }

  if (requestHref)
    return (
      <section className="booking-success" aria-live="polite">
        <span className="success-orbit" aria-hidden="true">
          ✳
        </span>
        <div className="section-kicker">
          <span>READY WHEN YOU ARE</span>
        </div>
        <h2>
          Your note is
          <br />
          <em>almost there.</em>
        </h2>
        <p>
          We’ve put your request together. Continue to WhatsApp to send it to
          the Morrow team and we’ll confirm your chair.
        </p>
        <a
          className="visit-cta"
          href={requestHref}
          target="_blank"
          rel="noreferrer"
        >
          Send request in WhatsApp <span>↗</span>
        </a>
        <button
          className="reset-request"
          type="button"
          onClick={() => setRequestHref("")}
        >
          Make a change
        </button>
      </section>
    );

  return (
    <form className="booking-form" onSubmit={submitRequest}>
      <div className="booking-form-heading">
        <span>01 — THE HELLO</span>
        <p>Tell us a little about the visit you have in mind.</p>
      </div>
      <label className="field-label">
        Your name
        <input
          required
          autoComplete="name"
          value={guestName}
          onChange={(event) => setGuestName(event.target.value)}
          placeholder="What should we call you?"
        />
      </label>
      <label className="field-label">
        What sounds good?
        <select
          required
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          <option value="" disabled>
            Choose a ritual
          </option>
          {services.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} · {item.price}
            </option>
          ))}
        </select>
      </label>
      <label className="field-label">
        Is there someone you have in mind?
        <select
          value={stylist}
          onChange={(event) => setStylist(event.target.value)}
        >
          <option>Anyone on the team</option>
          {stylists.map((item) => (
            <option key={item.name}>{item.name}</option>
          ))}
        </select>
      </label>
      <div className="field-pair">
        <label className="field-label">
          A day that works
          <input
            required
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <fieldset className="time-field">
          <legend>And a time-ish</legend>
          <div className="time-options">
            {times.map((item) => (
              <button
                className={time === item ? "is-selected" : ""}
                type="button"
                aria-pressed={time === item}
                onClick={() => setTime(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <label className="field-label">
        Anything else we should know? <span>Optional</span>
        <textarea
          name="note"
          rows={3}
          placeholder="Your hair history, a question, a little context..."
        />
      </label>
      {!time && (
        <span className="form-hint">Pick a time to send us your request.</span>
      )}
      <button className="booking-submit" type="submit" disabled={!time}>
        Put a note together <span aria-hidden="true">↗</span>
      </button>
      <p className="form-disclaimer">
        This is a request, not a confirmed appointment. We’ll reply to find a
        time that works.
      </p>
    </form>
  );
}
