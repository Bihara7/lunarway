import Image from "next/image";

function Destinations() {
  var slides = [
    {
      title: "Malaysia",
      description:
        "Modern cities and rich culture. Landmarks, shopping, and scenic attractions. Great for varied travel experiences.",
      mainImage: "/malasiya1.png",
      sideImage: "/malasiya2.png",
    },
    {
      title: "Thailand",
      description:
        "Culture, temples, and lively streets. Markets, nightlife, and iconic sights. Ideal for adventure and leisure.",
      mainImage: "/thailand1.png",
      sideImage: "/thailand2.png",
    },
    {
      title: "Dubai",
      description:
        "Luxury city and desert adventures.Iconic landmarks and premium shopping. Perfect for modern travel experiences.",
      mainImage: "/Dubai1.png",
      sideImage: "/Dubai2.png",
    },
  ];

  var slideItems = [];
  for (var i = 0; i < slides.length; i++) {
    slideItems.push(
      <div
        key={i}
        className="snap-center shrink-0 w-full flex flex-col bg-gray-200 py-10 items-between lg:flex-row gap-6 px-6 lg:px-16 mb-5 h-[90vh]"
      >
        {/* Left Text */}
        <div className="w-full lg:w-1/3"> 
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
            Places We Take You Worldwide
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Discover destinations chosen for their experiences, culture,
            and unforgettable moments, both close to home and across the world.
          </p>
        </div>

        {/* Center Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-[260px] h-[380px] lg:w-[300px] lg:h-[420px] rounded-xl overflow-hidden">
            <Image
              src={slides[i].mainImage}
              alt={slides[i].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-1/3 flex-col pt-32 rounded-xl p-4">
          <div>
            <h3 className="font-semibold text-black text-lg mb-2">
              {slides[i].title}
            </h3>
            <p className="text-sm text-black mb-4">
              {slides[i].description}
            </p>
          </div>
          
          <div className="relative w-full bg-slate-600 h-40 rounded-lg overflow-hidden mb-4">
            
            <Image
              src={slides[i].sideImage}
              alt={slides[i].title}
              fill
              className="object-cover"
            />
          </div>
          
          <span className="text-sm font-semibold text-black cursor-pointer">
            View Details →
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {slideItems}
      </div>
    </section>
  );
}

export default Destinations;
