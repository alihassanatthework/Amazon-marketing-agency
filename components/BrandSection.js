"use client";

import Image from "next/image";

const brands = [
    "/images/brands/brand1.png",
    "/images/brands/brand2.png",
    "/images/brands/brand3.png",
    "/images/brands/brand4.png",
    "/images/brands/brand5.png",
    "/images/brands/brand6.png",
];

export default function BrandSection() {
    return (
        <section className="section-tight border-y border-gray-800">
            <div className="container">

                {/* TOP TITLE */}
                <div className="text-center mb-10">
                    <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                        Onboarded Brands
                    </p>
                </div>

                {/* LOGO MARQUEE */}
                <div className="overflow-hidden">
                    <div className="brand-track">
                        {[...brands, ...brands].map((logo, i) => (
                            <div key={i} className="brand-item">
                                <Image
                                    src={logo}
                                    alt="brand"
                                    width={140}
                                    height={60}
                                    className="object-contain opacity-70 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="border-t border-gray-800 my-12"></div>

                {/* TEXT SECTION */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-20">

                    {/* LEFT */}
                    <div>
                        <p className="text-muted max-w-lg">
                            Unlock the Full Potential of Your Amazon Brand
                            <br /><br />
                            At Sellerova, we help brands scale faster with a team of highly
                            skilled Amazon specialists.
                            <br /><br />
                            Our experts are trained through real-world experience and proven
                            strategies, ensuring every decision is data driven and
                            results focused. From listing optimization to PPC growth, we
                            deliver consistent performance that drives revenue.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                            Why Sellerova Matters for Your Brand
                        </h2>

                        <p className="text-muted max-w-md">
                            In today’s highly competitive Amazon marketplace, success requires
                            more than just listing products. It demands strategy, precision,
                            and continuous optimization.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}