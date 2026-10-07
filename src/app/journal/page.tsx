import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import JournalBrowser from "@/components/journal-browser";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "A small collection of hair thoughts, useful rituals, and studio stories.",
};

export default function JournalPage() {
  return (
    <main className="inner-page journal-page" id="top">
      <PageIntro
        number="05"
        eyebrow="THE MORROW FIELD NOTES"
        title={
          <>
            Hair thoughts
            <br />
            <em>for real life.</em>
          </>
        }
        description="A little know-how, a little feeling, and the occasional reminder that you’re doing just fine."
      />
      <section className="journal-section">
        <JournalBrowser />
      </section>
    </main>
  );
}
