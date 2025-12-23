export default function Steps(){
    return(
        <main>
            <section className="relative bg-[#f2f2f2] py-40">
                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                        Plan Your Trip In <br /> Simple Steps
                    </h2>
        
                    <p className="text-gray-600 max-w-md lg:ml-auto">
                        A carefully designed journey planning process focused on comfort and
                        confidence.
                    </p>
                    </div>
        
                    {/* Steps */}
                    <div className="grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <span className="text-4xl font-bold block mb-20">01</span>
                        <h3 className="font-semibold text-xl mb-2">
                        Choose Your Destination
                        </h3>
                        <p className="text-lg text-gray-600 ">
                        Explore local and international destinations and decide where you
                        want to travel.
                        </p>
                    </div>
        
                    {/* Step 2 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-10"> 
                        <span className="text-4xl font-bold block mb-20">02</span>
                        <h3 className="font-semibold text-xl mb-2">
                        Select a Tour Package
                        </h3>
                        <p className="text-sm text-gray-600">
                        Choose a tour package that matches your travel style and budget.
                        </p>
                    </div>
        
                    {/* Step 3 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        <span className="text-4xl font-bold block mb-20">03</span>
                        <h3 className="font-semibold text-xl mb-2">
                        Confirm Dates and Details
                        </h3>
                        <p className="text-sm text-gray-600">
                        Share your preferred dates and details to finalize the booking.
                        </p>
                    </div>
        
                    {/* Step 4 */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm mt-0 md:mt-10">
                        <span className="text-4xl font-bold block mb-20">04</span>
                        <h3 className="font-semibold text-xl mb-2">
                        Travel With Confidence
                        </h3>
                        <p className="text-sm text-gray-600">
                        Enjoy your journey while we handle the rest.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}