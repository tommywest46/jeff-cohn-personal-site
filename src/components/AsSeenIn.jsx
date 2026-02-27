import React from 'react';

const AsSeenIn = () => {
    const logos = [
        "FOX Business", "HousingWire", "Inman", "Apple Podcasts",
        "Edge Magazine", "RealTrends", "3 News Now",
        "FOX Business", "HousingWire", "Inman", "Apple Podcasts",
        "Edge Magazine", "RealTrends", "3 News Now" // Duplicated to loop cleanly
    ];

    return (
        <section className="py-12 border-y border-text-dark/5 bg-background overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            {/* Auto-scrolling container */}
            <div className="flex w-[200%] animate-[marquee_40s_linear_infinite]">
                <div className="flex w-1/2 justify-around items-center gap-12 px-6">
                    {logos.slice(0, 7).map((logo, i) => (
                        <div key={`logo-1-${i}`} className="font-heading font-bold text-xl md:text-2xl text-text-dark/20 uppercase tracking-widest whitespace-nowrap">
                            {logo}
                        </div>
                    ))}
                </div>
                <div className="flex w-1/2 justify-around items-center gap-12 px-6">
                    {logos.slice(7).map((logo, i) => (
                        <div key={`logo-2-${i}`} className="font-heading font-bold text-xl md:text-2xl text-text-dark/20 uppercase tracking-widest whitespace-nowrap">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AsSeenIn;
