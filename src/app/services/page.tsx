import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";
import ServiceExplorer from "@/components/service-explorer";

export const metadata: Metadata = {
  title: "The menu",
  description:
    "Explore Morrow's cuts, colour, care rituals, and transparent starting prices.",
};

export default function ServicesPage() {
  return (
    <main className="inner-page services-page" id="top">
      <PageIntro
        number="02"
        eyebrow="THE MENU, WITH ROOM TO BREATHE"
        title={
          <>
            Good hair.
            <br />
            <em>Your kind of way.</em>
          </>
        }
        description="Thoughtful work for real life. Pick a feeling, find a ritual, and we’ll make a plan together."
      />
      <section className="menu-explorer">
        <div className="menu-explorer-top">
          <span>THE SERVICE MENU</span>
          <span>PRICES ARE A STARTING POINT</span>
        </div>
        <ServiceExplorer />
      </section>
      <section className="service-consult">
        <div>
          <div className="section-kicker">
            <span>A QUESTION BEFORE THE SCISSORS</span>
          </div>
          <h2>
            Not sure where
            <br />
            to <em>begin?</em>
          </h2>
        </div>
        <p>
          That’s a perfectly good place to start. We’ll talk through your hair,
          your routine, and what you want to feel when you leave. No pressure to
          know the right words.
        </p>
        <Link className="visit-cta" href="/book">
          Ask for a consultation <span>↗</span>
        </Link>
      </section>
      <section className="service-faq">
        <div className="section-kicker">
          <span>THE PRACTICAL BITS</span>
        </div>
        <h2>A few things people ask.</h2>
        <div className="faq-stack">
          <details>
            <summary>
              How do I know what to book? <span>+</span>
            </summary>
            <p>
              Choose the closest match, or request a consultation. We’ll confirm
              the right service before your appointment so there are no
              surprises.
            </p>
          </details>
          <details>
            <summary>
              Are these final prices? <span>+</span>
            </summary>
            <p>
              Prices are starting points. Length, density, and the time your
              service needs can change the final cost. Your stylist will always
              talk this through first.
            </p>
          </details>
          <details>
            <summary>
              Can I bring a reference photo? <span>+</span>
            </summary>
            <p>
              Please do. Bring the pictures you love and the ones that are not
              quite right. They help us understand the feeling you’re after.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
