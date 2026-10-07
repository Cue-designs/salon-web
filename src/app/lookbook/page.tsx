import type { Metadata } from "next";
import PageIntro from "@/components/page-intro";
import LookbookGallery from "@/components/lookbook-gallery";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "A living moodboard of cuts, colour, and texture from Morrow Hair House.",
};

export default function LookbookPage() {
  return (
    <main className="inner-page lookbook-page" id="top">
      <PageIntro
        number="04"
        eyebrow="A LIVING MOODBOARD"
        title={
          <>
            A little inspiration.
            <br />
            <em>A lot of possibility.</em>
          </>
        }
        description="Real ideas from our chairs, gathered to get the conversation going. Your version gets to be different."
      />
      <section className="lookbook-section">
        <LookbookGallery />
      </section>
      <p className="lookbook-footnote">
        These shapes are a starting point, not a promise. Bring us the feeling
        you love and we’ll make it yours.
      </p>
    </main>
  );
}
