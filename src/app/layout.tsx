import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Morrow Hair House | Good hair lives here",
    template: "%s | Morrow Hair House",
  },
  description:
    "A neighbourhood hair house for considered cuts, beautiful colour, and the kind of appointment that feels like a deep breath.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  );
}
