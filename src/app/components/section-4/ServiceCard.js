import Image from "next/image";

export default function ServiceCard({ imagePath, name, description }) {
  return (
    <>
      <section className="grid grid-rows-[200px_1fr] gap-6 ">
        {/* Content Card */}
        <div className="bg-gradient-to-r from-[#402502] to-[#281D10] rounded-[50px] shadow-lg flex flex-col items-center justify-start px-4 py-8  w-full grow">
          <Image
            src={imagePath}
            alt={name}
            width={80}
            height={80}
            className="object-cover rounded-lg mb-4"
          />
          <h2 className="font-helvetica text-center font-bold">{name}</h2>
        </div>
        {/* Content Description */}
        <div className="flex flex-col justify-start ">
          <p className="font-helvetica text-center text-sm">{description}</p>
        </div>
      </section>
    </>
  );
}
