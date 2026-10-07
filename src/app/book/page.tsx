import type { Metadata } from "next";
import { Suspense } from "react";
import PageIntro from "@/components/page-intro";
import BookingForm from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Find your chair",
  description:
    "Send Morrow a front-end appointment request and continue in WhatsApp.",
};

export default function BookPage() {
  return (
    <main className="inner-page book-page" id="top">
      <PageIntro
        number="06"
        eyebrow="YOUR CHAIR IS WAITING"
        title={
          <>
            Let’s make
            <br />
            <em>a day of it.</em>
          </>
        }
        description="Tell us what you have in mind. We’ll check the diary and come back with a time that feels right."
      />
      <section className="booking-layout">
        <aside className="booking-aside">
          <span className="booking-side-number">06 / 08</span>
          <p>
            Good things start with a hello. Take your time; this is a request,
            not a commitment.
          </p>
          <div className="booking-hours">
            <span>THE HOUSE IS OPEN</span>
            <p>
              Tuesday – Saturday
              <br />9 in the morning – 6 in the evening
            </p>
          </div>
          <div className="booking-phone-note">
            A person reads every note.
            <br />
            <a href="/visit">Need a different kind of help? ↗</a>
          </div>
        </aside>
        <Suspense
          fallback={<div className="booking-loading">Setting the table...</div>}
        >
          <BookingForm />
        </Suspense>
      </section>
    </main>
  );
}
