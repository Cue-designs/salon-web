"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFab from "@/components/whatsapp-fab";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.toLowerCase().startsWith("/admin") ?? false;

  return (
    <>
      {!isAdminRoute && <SiteHeader />}
      {children}
      {!isAdminRoute && (
        <>
          <SiteFooter />
          <WhatsAppFab />
        </>
      )}
    </>
  );
}
