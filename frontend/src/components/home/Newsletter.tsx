import Image from "next/image"

export default function Newsletter() {
    return (
        <section className="bg-[url('/newsletter-bg-shape-1-1.webp')]">
            <div className="bg-[url('/home3-newsletter-bg.png')] bg-cover bg-center max-w-7xl bg-green-200 mx-auto relative rounded-3xl px-6 md:px-16 py-12 overflow-hidden translate-y-1/2">

                {/* Left Vector */}
                <Image
                    src="/newsletter-vector-1-1.svg"
                    alt="vector"
                    width={100}
                    height={100}
                    className="absolute top-0 left-0 opacity-80"
                />

                {/* Content */}
                <div className="text-center max-w-2xl mx-auto space-y-6 relative z-10">

                    <h1 className="text-3xl md:text-4xl font-bold">
                        Join to Newsletter
                    </h1>

                    <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
                        <input
                            type="email"
                            placeholder="Type Your Email Address"
                            className="outline-none px-5 py-3 w-full text-sm md:text-base"
                        />
                        <button className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-gray-600 font-medium text-base md:text-lg">
                        To get monthly upto 10% best offer in all package.
                    </p>

                </div>

                {/* Right Vector */}
                <Image
                    src="/newsletter-vector-2.svg"
                    alt="vector"
                    width={100}
                    height={100}
                    className="absolute bottom-0 right-0 opacity-80"
                />

            </div>
        </section>
    );
}