import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const metadata: Metadata = {
  title: "Morrow Hair House | Good hair lives here",
  description:
    "A neighbourhood hair house for considered cuts, beautiful colour, and the kind of appointment that feels like a deep breath.",
};

export default function Page() {
  return <HomePage />;
}
