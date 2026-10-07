import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Find us",
  description: "Plan your visit to Morrow Hair House in Portland, Oregon.",
};

export default function VisitPage() {
  return (
    <main className="inner-page visit-page" id="top">
      <PageIntro
        number="07"
        eyebrow="COME ON IN"
        title={
          <>
            Your new
            <br />
            <em>neighbourhood.</em>
          </>
        }
        description="A little corner of Olive Street, made for good hair and staying five minutes longer."
      />
      <section className="visit-map-section">
        <div className="map-illustration" aria-label="Illustrated location map">
          <span className="map-street street-horizontal">OLIVE STREET</span>
          <span className="map-street street-vertical">NW 18TH AVE</span>
          <span className="map-park">
            THE LITTLE
            <br />
            GREEN BIT
          </span>
          <span className="map-pin">
            <i>m.</i>
            <span>
              MORROW
              <br />
              HAIR HOUSE
            </span>
          </span>
          <span className="map-compass">
            N<br />↑
          </span>
        </div>
        <div className="visit-address">
          <div className="section-kicker">
            <span>THE FRONT DOOR</span>
          </div>
          <h2>
            18 Olive
            <br />
            <em>Street.</em>
          </h2>
          <p>
            Portland, OR 97209
            <br />A couple doors down from the good bakery.
          </p>
          <a
            className="underlined-link"
            href="https://www.google.com/maps/search/?api=1&query=18+Olive+Street+Portland+OR+97209"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <span>↗</span>
          </a>
        </div>
      </section>
      <section className="visit-practical">
        <div className="visit-hours">
          <div className="section-kicker">
            <span>WHEN THE LIGHTS ARE ON</span>
          </div>
          <div className="hours-list">
            <div>
              <span>Tuesday – Friday</span>
              <span>9:00 – 18:00</span>
            </div>
            <div>
              <span>Saturday</span>
              <span>9:00 – 16:00</span>
            </div>
            <div>
              <span>Sunday – Monday</span>
              <span>Taking a little breath</span>
            </div>
          </div>
        </div>
        <div className="visit-notes">
          <div className="section-kicker">
            <span>THE LITTLE LOGISTICS</span>
          </div>
          <details>
            <summary>
              Getting here <span>+</span>
            </summary>
            <p>
              There’s street parking nearby, and the Olive & 18th bus stop is
              around the corner. Give yourself a few extra minutes for the first
              visit.
            </p>
          </details>
          <details>
            <summary>
              Running a little late? <span>+</span>
            </summary>
            <p>
              It happens. Send us a note on WhatsApp and we’ll do our best to
              make a little room.
            </p>
          </details>
          <details>
            <summary>
              Need step-free access? <span>+</span>
            </summary>
            <p>
              Message us before your visit and we’ll share the best entrance and
              make sure we’re ready to welcome you.
            </p>
          </details>
        </div>
      </section>
      <section className="visit-bottom">
        <div>
          <span>WE’D LOVE TO SEE YOU</span>
          <p>
            First visit, fifteenth visit, haven’t been in years. The door’s
            open.
          </p>
        </div>
        <Link className="visit-cta" href="/book">
          Request an appointment <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
