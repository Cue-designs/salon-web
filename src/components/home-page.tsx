import Link from "next/link";
import { services } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> YOUR HAIR, IN GOOD HANDS
          </div>
          <h1>
            A little more
            <br />
            you, in <em>full</em>
            <br />
            <span className="hero-bloom">bloom.</span>
          </h1>
          <p className="hero-intro">
            A neighbourhood hair house for considered cuts, beautiful colour and
            the kind of appointment that feels like a deep breath.
          </p>
          <Link className="round-link" href="/services">
            <span>
              Find your
              <br />
              feel-good
            </span>
            <span className="round-link-arrow" aria-hidden="true">
              ↓
            </span>
          </Link>
          <span className="hero-side-note">A GOOD DAY STARTS AT THE ROOTS</span>
        </div>
        <div
          className="hero-art"
          aria-label="Abstract sculptural salon artwork"
        >
          {/* IMAGE PLACEHOLDER: Replace the CSS sculpture with a salon portrait when photography is available. */}
          <div className="art-sun" />
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-sculpture">
            <div className="sculpture-back" />
            <div className="sculpture-face" />
            <div className="sculpture-hair" />
            <div className="sculpture-neck" />
            <div className="sculpture-earring" />
          </div>
          <div className="art-stamp">
            <span>EST.</span>
            <strong>MM</strong>
            <span>2021</span>
          </div>
          <span className="art-caption">
            A softer kind of statement <span>01 / 04</span>
          </span>
        </div>
      </section>
      <div className="ticker">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 2 }).map((_, index) => (
            <span className="ticker-set" key={index}>
              CUT WITH INTENTION <i>✳</i> COLOUR WITH FEELING <i>✳</i> STAY A
              LITTLE LONGER <i>✳</i> LEAVE A LITTLE LIGHTER <i>✳</i>
            </span>
          ))}
        </div>
      </div>
      <section className="intro-section home-intro">
        <div className="section-kicker">
          <span>01</span> THE MORROW FEELING
        </div>
        <div className="intro-content">
          <p className="display-copy">
            Not just a hair appointment.
            <br />
            <em>A little room to be yourself.</em>
          </p>
          <div className="intro-aside">
            <span className="sun-doodle" aria-hidden="true">
              ✳
            </span>
            <p>
              Come as you are. Leave feeling a bit more like you. We made Morrow
              for good hair, honest conversations and the lovely in-between.
            </p>
            <Link className="text-link" href="/about">
              A note from our founder <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-menu-section">
        <div className="services-heading">
          <div>
            <div className="section-kicker section-kicker-light">
              <span>02</span> THE GOOD STUFF
            </div>
            <h2>
              Made for your
              <br />
              <em>kind of hair.</em>
            </h2>
          </div>
          <p>
            Thoughtful work, never one-size-fits-all. Tell us what you want your
            hair to feel like; we’ll take it from there.
          </p>
        </div>
        <div className="service-list">
          {services.slice(0, 3).map((service, index) => (
            <Link className="service-row" href="/services" key={service.name}>
              <span className="service-number">0{index + 1}</span>
              <span className="service-name">{service.name}</span>
              <span className="service-detail">{service.description}</span>
              <span className="service-price">{service.price}</span>
              <span className="service-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
        <Link className="home-menu-link" href="/services">
          Explore all nine rituals <span>↗</span>
        </Link>
      </section>
      <section className="home-story-section">
        <div className="home-story-art">
          <span className="story-loop loop-one" />
          <span className="story-loop loop-two" />
          <span className="story-spark">✳</span>
          <span className="story-caption">GOOD THINGS HAPPEN HERE</span>
        </div>
        <div>
          <div className="section-kicker">
            <span>03</span> A PLACE TO LAND
          </div>
          <h2>
            Good things
            <br />
            happen <em>here.</em>
          </h2>
          <p>
            We’re a small team with a big soft spot for the details. The
            playlist, the proper consultation, the tea that’s always warm. It
            all matters.
          </p>
          <Link className="underlined-link" href="/about">
            Get to know our little world <span>↗</span>
          </Link>
        </div>
      </section>
      <section className="home-note-section">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <div>
          <div className="section-kicker">
            <span>04</span> A NOTE FROM THE CHAIR
          </div>
          <blockquote>
            “I walked in needing a trim and walked out feeling like the most{" "}
            <em>magnetic</em> version of myself.”
          </blockquote>
          <span className="quote-attribution">
            <span className="quote-rule" /> JAMIE R. · HERE SINCE 2022
          </span>
        </div>
        <Link href="/journal" className="text-link">
          More little stories ↗
        </Link>
      </section>
      <section className="home-visit-strip">
        <div>
          <div className="section-kicker section-kicker-light">
            <span>05</span> YOUR CHAIR IS WAITING
          </div>
          <h2>
            Let’s make a day
            <br />
            of <em>it.</em>
          </h2>
        </div>
        <p>
          18 Olive Street
          <br />
          Portland, OR 97209
          <br />
          <span>Tue – Sat, 9am – 6pm</span>
        </p>
        <Link href="/book" className="visit-cta">
          Find your chair <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
