import Image from 'next/image'
import Navbar from '../../../components/navbar'
import TourPackages from '../../../components/pack-cards'
import Steps from '../../../components/trip-steps'
import Foot from '../../../components/footer'

export default function Tours(){
  return(
    <main>
      <Navbar/>

      {/* Cover image */}
      <section className="mt-32">
        <div className="max-w-auto mx-auto px-6">

          {/* Text row */}
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Find Your <br />
              Perfect Journey
            </h1>

            <p className="ml-60 text-sm text-gray-500 max-w-md">
              Explore carefully curated local and international tour packages
              designed for every type of traveler.
            </p>
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden">
            <Image
              src="/tours-cover.png"
              alt="Aerial beach view"
              width={500}
              height={500}
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <TourPackages/>

      <Steps/>

      <Foot/>

    </main>
  )
}
