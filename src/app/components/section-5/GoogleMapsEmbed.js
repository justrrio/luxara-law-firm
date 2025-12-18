"use client";

export default function GoogleMapsEmbed({ embedUrl, mapsUrl, height }) {
  return (
    <div
      className="relative w-full h-full rounded-xl shadow-lg overflow-hidden"
      style={{ height }}
    >
      {/* Iframe */}
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        className="absolute inset-0 w-full h-full"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Kantor"
      />

      {/* Lapisan transparan yang menangkap klik */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka lokasi di Google Maps"
        className="absolute inset-0 block"
      />
    </div>
  );
}
