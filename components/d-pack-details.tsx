import Image from "next/image";
export default function PackageDetails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Package Overview
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Experience the glamour and excitement of Dubai with a thoughtfully planned city tour that blends luxury, culture, and adventure. From iconic city landmarks and world-famous attractions to thrilling desert experiences, this journey offers a perfect balance of guided sightseeing and unforgettable moments.

          </p>


          <p className="text-gray-600 leading-relaxed mb-8">
          Ideal for travelers seeking a modern, exciting, and well-organized international holiday.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Activities
          </h3>

          <div className="space-y-6 text-gray-600">
            {/* Day 1 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 1 – Arrival in Dubai
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Arrival at Dubai International Airport</li>
                <li>Airport transfer to hotel and check-in</li>
                <li>Evening Dinner Cruise Ride with scenic city views</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 2 – City Highlights
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Morning Dubai City Tour covering key landmarks</li>
                <li>Evening visit to the iconic Burj Khalifa</li>
                <li>Free time to explore surrounding areas</li>
              </ul>
            </div>

            {/* Day 3 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 3 – Desert Adventure
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Desert Safari Experience</li>
                <li>Dune bashing and desert activities</li>
                <li>Entertainment and dinner included</li>
              </ul>
            </div>

            {/* Day 4 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 4 – Attractions & Leisure
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Visit to Miracle Garden</li>
                <li>Global Village Tour</li>
                <li>Enjoy shopping, culture, and entertainment</li>
              </ul>
            </div>
            {/* Day 5 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Day 5 – Departure
              </h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Hotel check-out</li>
                <li>Airport transfer</li>
                <li>Return flight to Sri Lanka</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
            <div className="mb-6">
              <p className="text-sm text-gray-500">Starting at</p>
              <p className="text-3xl font-bold text-gray-900">
                LKR 160,000
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-1">
                Duration
              </h4>
              <p className="text-gray-600">
                4 Nights | 5 Days
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Facilities
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li> <Image src="/air.png" alt="Airport transfer" width={20} height={20} className="inline mr-2" /> Airport transfers</li>
                <li><Image src="/hotel.png" alt="Hotel_accommodation" width={20} height={20} className="inline mr-2" /> Hotel accommodation</li>
                <li><Image src="/visa.png" alt="visa assistance" width={20} height={20} className="inline mr-2" /> visa assistance</li>
                <li><Image src="/local.png" alt="Local transportation" width={20} height={20} className="inline mr-2" /> Local transportation</li>
                <li><Image src="/tour.png" alt="Tour Coordination & Support" width={20} height={20} className="inline mr-2" /> Tour Coordination & Support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
