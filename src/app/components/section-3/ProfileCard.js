import Image from "next/image";

export default function ProfileCard({
  imagePath,
  name,
  title,
  specialization,
  experience,
}) {
  return (
    <section className="rounded-lg shadow-lg flex flex-col items-center text-center bg-white">
      <Image
        src={imagePath}
        alt={`${name} - ${title}`}
        width={100}
        height={100}
        sizes="100vw"
        quality={100}
        priority
        className="w-full sm:h-64 xl:h-72 object-cover rounded-lg"
      />
      {/* Content */}
      <div className="py-4 px-2 h-full grid grid-rows-[1fr_1fr_1fr_2fr]">
        <h2 className="text-lg font-semibold text-[var(--text-primary-section-3)]">
          {name}
        </h2>
        <h3 className="text-[var(--text-secondary-section-3)] text-sm">
          {title}
        </h3>
        <p className="text-[var(--text-primary-section-3)] text-xs font-semibold">
          Spesialisasi: {specialization}
        </p>
        <p className="mt-2 text-[var(--text-primary-section-3)] text-xs">
          {experience}
        </p>
      </div>
    </section>
  );
}
