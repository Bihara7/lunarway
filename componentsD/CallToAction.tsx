import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative h-[420px] sm:h-[480px] md:h-[550px] lg:h-[650px] mt-24 overflow-hidden">

      {/* Background image */}
      <Image
        src="/Last.png"
        alt="Train journey"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 text-white">

        {/* Heading */}
        <h2 className="
          font-semibold leading-tight
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
        ">
          Ready For Your Next <br className="hidden sm:block" />
          Adventure?
        </h2>

        {/* Description */}
        <p className="
          mt-4
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          text-gray-200
          max-w-xl
        ">
          Let’s start planning your journey today!
        </p>

        {/* Button */}
        <button className="
          mt-6
          bg-white text-black
          px-6 py-3
          rounded-lg
          text-sm
          sm:text-base
          font-medium
          hover:bg-gray-100
          transition
        ">
          Get Started
        </button>

      </div>
    </section>
  );
}
