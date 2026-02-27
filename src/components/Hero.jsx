import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: "power3.out",
                delay: 0.2
            });

            tl.fromTo(imageRef.current,
                { scale: 1.05, opacity: 0 },
                { scale: 1, opacity: 1, duration: 3, ease: "power2.out" },
                "-=0.8"
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] bg-primary overflow-hidden flex flex-col md:flex-row">

            {/* Absolute Image Background on mobile, right bleed on desktop */}
            <div className="absolute md:relative top-0 right-0 w-full h-full md:w-[60%] overflow-hidden z-[1] ml-auto">
                {/* Gradients to blend the image */}
                <div className="absolute inset-0 bg-primary/30 md:bg-transparent z-[5]"></div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary via-primary/80 to-transparent z-[5] md:w-32 md:h-full md:bg-gradient-to-r md:left-0 md:from-primary lg:from-primary/95 md:to-transparent"></div>
                {/* Accent tint on shadows */}
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-[6]"></div>

                <img
                    ref={imageRef}
                    src="/images/jeff-cohn-portrait-1.png"
                    alt="Jeff Cohn"
                    className="w-full h-full object-cover object-top grayscale-[100%] contrast-[1.15]"
                />
            </div>

            {/* Text Content */}
            <div ref={textRef} className="absolute inset-0 md:relative md:w-[40%] h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 z-10 pointer-events-none">
                <div className="hero-text text-accent tracking-[0.2em] font-heading font-bold text-sm mb-6 uppercase">
                    Jeff Cohn
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-6">
                    <span className="hero-text block font-heading font-bold text-background mb-2">Ambition meets</span>
                    <span className="hero-text block font-drama italic text-accent pr-8 md:pr-0">Architecture.</span>
                </h1>
                <div className="hero-text font-data text-xs md:text-sm text-background/60 mb-10 tracking-wider">
                    $3B+ IN SALES · 10,000+ HOMES · #1 PODCAST
                </div>
                <div className="hero-text pointer-events-auto">
                    <a
                        href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magnetic-btn bg-accent text-primary px-8 py-4 rounded-full font-medium flex items-center gap-3 w-fit shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_4px_25px_rgba(201,168,76,0.4)]"
                    >
                        Listen to the Podcast
                        <span className="transition-transform group-hover:translate-x-1 font-bold">→</span>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
