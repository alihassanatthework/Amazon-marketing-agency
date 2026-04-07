"use client";

import Image from "next/image";

const brands = [
    "/images/brands/brand1.png",
    "/images/brands/brand2.png",
    "/images/brands/brand3.png",
    "/images/brands/brand4.png",
    "/images/brands/brand5.png",
    "/images/brands/brand6.png",
    "/images/brands/brand7.png",
    "/images/brands/brand1.png",
    "/images/brands/brand2.png",
    "/images/brands/brand3.png",
    "/images/brands/brand4.png",
    "/images/brands/brand5.png",
    "/images/brands/brand6.png",
    "/images/brands/brand7.png"
];

export default function BrandSection() {
    return (
        <section className="brand-block-section">
            <div className="container">
                <div className="brand-block-card">
                    {/* TOP */}
                    <div className="brand-block-top">
                        <h2 className="brand-block-title">
                            Trusted by Growing <span>Amazon Brands</span>
                        </h2>

                        <div className="brand-slider-shell">
                            <div className="brand-slider-track">
                                {[...brands, ...brands].map((logo, index) => (
                                    <div key={index} className="brand-logo-box">
                                        <Image
                                            src={logo}
                                            alt={`Brand logo ${index + 1}`}
                                            width={140}
                                            height={44}
                                            style={{ width: "auto", height: "auto" }}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="brand-block-bottom">
                        {/* LEFT */}
                        <div className="brand-copy-box">
                            <h3>Unlock the Full Potential of Your Amazon Brand</h3>

                            <p>
                                At Sellerova, we help brands scale faster with a team of highly
                                skilled Amazon specialists.
                            </p>

                            <p>
                                Our experts are trained through real-world experience and proven
                                strategies, ensuring every decision is data-driven and
                                results-focused. From listing optimization to PPC growth, we
                                deliver consistent performance that drives revenue.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div className="brand-copy-box brand-copy-box-visual">
                            <div className="brand-why-inline">

                                <div className="brand-why-header">
                                    <h3>Why Sellerova Matters for Your Brand</h3>

                                    <Image
                                        src="/images/brandsection/why-sellerova.png"
                                        alt="Amazon Verified Partner"
                                        width={120}
                                        height={50}
                                        className="brand-why-badge"
                                    />
                                </div>

                                <p>
                                    In today’s highly competitive Amazon marketplace, success requires more
                                    than just listing products. It demands strategy, precision, and
                                    continuous optimization.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}