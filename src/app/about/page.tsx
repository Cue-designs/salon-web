import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Our story",
  description: "Meet the people and little ideas behind Morrow Hair House.",
};

export default function AboutPage() {
  return (
    <main className="inner-page about-page" id="top">
      <PageIntro
        number="01"
        eyebrow="A LITTLE ABOUT US"
        title={
          <>
            Come for the hair.
            <br />
            <em>Stay for the feeling.</em>
          </>
        }
        description="We made Morrow for the good hair, yes. And for everything that happens while you’re here."
      />
      <section className="about-manifesto">
        <div className="manifesto-art">
          <span className="manifesto-sun" />
          <span className="manifesto-ribbon ribbon-a" />
          <span className="manifesto-ribbon ribbon-b" />
          <span className="manifesto-seal">
            M<br />M
          </span>
        </div>
        <div className="manifesto-copy">
          <div className="section-kicker">
            <span>THE SHORT VERSION</span>
          </div>
          <p>
            We believe a salon should feel like a <em>soft landing.</em>
          </p>
          <p className="body-copy">
            Morrow began with one chair, a borrowed record player, and a belief
            that feeling seen is part of feeling good. That belief still shapes
            everything: how we listen, how we cut, and how much time we leave
            between appointments.
          </p>
          <Link className="underlined-link" href="/stylists">
            Meet the people behind the chair <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="values-section">
        <div>
          <div className="section-kicker section-kicker-light">
            <span>OUR LITTLE COMPASS</span>
          </div>
          <h2>
            How we like
            <br />
            <em>to do things.</em>
          </h2>
        </div>
        <div className="values-list">
          <article>
            <span>01</span>
            <h3>Listen first</h3>
            <p>
              Every good appointment starts with the whole story, not just the
              reference photo.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Make room</h3>
            <p>
              For different textures, changing minds, and the person you are
              today.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Leave it better</h3>
            <p>
              Good hair, useful advice, and a little more lightness on your way
              out.
            </p>
          </article>
        </div>
      </section>
      <section className="about-timeline">
        <div className="section-kicker">
          <span>A FEW MILE MARKERS</span>
        </div>
        <h2>Still becoming.</h2>
        <div className="timeline-row">
          <div>
            <span>2021</span>
            <p>One chair, one key, one very good idea.</p>
          </div>
          <div>
            <span>2023</span>
            <p>Our little team found its feet, and then its people.</p>
          </div>
          <div>
            <span>NOW</span>
            <p>Same feeling. A few more chairs. Always room for you.</p>
          </div>
        </div>
      </section>
      <section className="about-bottom">
        <p>There’s always a little more to the story.</p>
        <Link className="visit-cta" href="/journal">
          Read our field notes <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
