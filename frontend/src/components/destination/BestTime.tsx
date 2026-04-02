export default function BestTime({
  heading,
  cards,
}: {
  heading: string
  cards: any[]
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">

      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-10">
        {heading}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-4 md:p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition"
          >

            {/* Top Section */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10">

              {/* Image */}
              <img
                src={item.image}
                alt={item.season}
                className="w-full sm:w-40 md:w-54 h-40 sm:h-40 md:h-auto object-cover rounded-xl"
              />

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-semibold">
                  <h2>{item.season}</h2>
                  <span>({item.month})</span>
                </div>

                {/* Highlights */}
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li className="font-medium text-lg sm:text-xl text-gray-900 py-1 sm:py-2">
                    Highlights:
                  </li>

                  {item.highlights.map((highlight: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base font-medium"
                    >
                      <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <p className="text-xs sm:text-sm bg-[#F2F2FF] border rounded-full px-3 py-2 sm:p-3 text-center text-blue-500 font-medium">
              Perfect for: {item.perfectFor}
            </p>

          </div>
        ))}
      </div>
    </section>
  )
}