import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import StylistDirectory from "@/components/stylist-directory";

export const metadata: Metadata = {
  title: "Meet the team",
  description: "Find your person at Morrow Hair House.",
};

export default function StylistsPage() {
  return (
    <main className="inner-page stylists-page" id="top">
      <PageIntro
        number="03"
        eyebrow="REAL PEOPLE, REALLY GOOD HAIR"
        title={
          <>
            Find your
            <br />
            <em>kind of person.</em>
          </>
        }
        description="Four different points of view, one shared belief: you should feel like yourself in the chair."
      />
      <section className="team-directory">
        <div className="team-note">
          <span className="team-note-star">✳</span>
          <span>
            Take your time.
            <br />
            Your person is here.
          </span>
        </div>
        <StylistDirectory />
      </section>
      <section className="team-bottom">
        <p>Not sure who’s right for you? We’ll help you find your person.</p>
        <a className="visit-cta" href="/book">
          Let’s figure it out <span>↗</span>
        </a>
      </section>
    </main>
  );
}
