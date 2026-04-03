"use client";

import { useState } from "react";

export default function TopBanner() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="w-full bg-[#FF9900] text-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 relative text-center">
                <p className="text-base sm:text-lg md:text-xl font-semibold">
                    Want a{" "}
                    <a
                        href="/contact"
                        className="underline underline-offset-4 font-bold hover:opacity-80 transition"
                    >
                        FREE Account Audit?
                    </a>
                </p>

                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close banner"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-xl font-bold"
                >
                    ×
                </button>
            </div>
        </div>
    );
}