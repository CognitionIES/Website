"use client";

// This component shows a Google Maps embed
import WorldMapDemo from "@/components/ui/WorldMapDemo";
import { CONTACT_CONSTANTS } from "@/constants/contactPage/constants";

export default function MapSection() {
  const { EMBED_URL } = CONTACT_CONSTANTS.MAP;

  return (
    <div className="mt-16 max-w-7xl mx-auto   px-4 sm:px-6 lg:px-8 rounded-lg overflow-hidden  h-[400px] relative">
      {/* Google Maps iframe */}
      <iframe
        src={EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <WorldMapDemo />
    </div>
  );
}