import Image from "next/image"
import Navbar from "../../components/navbar"
import Destinations from "../../components/slide"
import TourCard from "../../components/pack-cards"
import WhyTrustUs from "../../components/trust"
import Foot from "../../components/footer"
import Steps from "../../components/trip-steps"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navbar/>

      {/* Cover image */}
      <section className="h-screen flex items-center justify-center my-20">
        <div className="relative w-full max-w-7xl h-[90vh] px-4">
          
          <div className="relative w-full h-full overflow-hidden rounded-md">
            <Image
              src="/home-cover.png"
              alt="Travel background"
              fill
              priority
              className="object-cover"
            />

            <div className="relative z-10 h-full flex items-end"> 
              <div className="w-full px-10 grid md:grid-cols-2 gap-8">
                
                <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-7 md:mb-10">
                  Travel Begins <br />
                  With The Right <br />
                  Journey.
                </h1>

                <div className="text-white max-w-md ml-auto">
                  <p className="text-white/90 mb-6">
                    From short local escapes to exciting international adventures,
                    we create travel experiences that are smooth, reliable, and memorable.
                  </p>

                  <Link href="/tours">
                    <button className="bg-white text-black px-6 py-3 my-3 rounded-md font-medium">
                      Get Started
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/*Services*/}
      <section className="w-full py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md text-black">
              Your Trusted Partner
              <br />
              For Local & Global
              <br />
              Travel
            </h2>

            <p className="text-gray-600 max-w-md md:text-left">
              We provide complete planning and on-ground support for well-organized
              tours across Sri Lanka and overseas destinations, so you can travel
              with confidence.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10">

            <div className="flex-1">
              <span className="text-2xl mb-4">
                <Image
                  src="/airplane.png"
                  width={35}
                  height={35}                  
                  alt="Airplane"
                />
              </span>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Flights & Transfers
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Convenient routes and competitive fares for smooth travel.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4">
                <Image
                  src="/hotel.png"
                  width={35}
                  height={35}
                  alt="Hotel"
                />
              </span>
              <h3 className="font-semibold text-black text-lg mb-2">
                Accommodation Planning
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Comfortable hotels with quality service in prime locations.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4">
                <Image
                  src="/suitcases.png"
                  width={35}
                  height={35}
                  alt="Suitcase"
                />
              </span>
              <h3 className="font-semibold text-black text-lg mb-2">
                Tour Packages
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Customized local and international tours for your style.
              </p>
            </div>

            <div className="flex-1">
              <span className="text-2xl mb-4">
                <Image
                  src="/passport.png"
                  width={35}
                  height={35}
                  alt="Passport image"
                />
              </span>
              <h3 className="font-semibold text-black text-lg mb-2">
                Visa Assistance
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Reliable visa guidance for stress-free international travel.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Destinations/>

      <TourCard/>

      <WhyTrustUs/>

      <Steps/>

      {/* Comments */}
      <section className="w-full bg-white py-16 ">
        {/* Heading */}
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            Stories From Our Travelers
          </h2>
          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Hear from travelers who have trusted us to plan their local and
            international journeys.
          </p>
        </div>

        {/* Image + Card */}
        <div className="relative mx-auto mt-12 max-w-6xl px-4">
          {/* Background Image */}
          <div className="relative h-[90vh] w-full overflow-hi0den rounded-lg ">
            <Image
              src="/home-cover.png"
              alt="Traveler story background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Testimonial Card */}
          <div className="absolute left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl sm:p-8">
            <p className="text-sm leading-relaxed text-gray-600">
              Lorem ipsum posuere massa facilisi augue augue aliquam pellentesque
              morbi sed suspendisse pellentesque aliquet eget eu aliquam malesuada
              tortor quis.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-400" />
              <span className="text-sm font-medium text-gray-800">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </section>

      <Foot/>
    </main>
  )
}