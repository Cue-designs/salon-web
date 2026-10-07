import { getWhatsAppHref } from "@/lib/site-data";

export default function WhatsAppFab() {
  return (
    <a
      className="whatsapp-float"
      href={getWhatsAppHref(
        "Hello! I'd love to book an appointment at Morrow Salon.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Morrow Salon on WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">
        ↗
      </span>
      <span className="whatsapp-label">Let’s chat</span>
    </a>
  );
}
