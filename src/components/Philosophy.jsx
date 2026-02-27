import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Fade Up
            const words = gsap.utils.toArray('.reveal-text');
            words.forEach((word) => {
                gsap.from(word, {
                    y: 40,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: word,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="philosophy" className="relative w-full py-32 md:py-48 bg-primary text-background overflow-hidden selection:bg-accent/30">

            {/* Background Parallax Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary z-20"></div>
                <img
                    ref={bgRef}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                    alt="Dark Architectural Texture"
                    className="w-full h-[120%] object-cover object-center grayscale-[50%] opacity-20 -top-[10%]"
                />
            </div>

            <div ref={textRef} className="relative z-30 max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32">

                {/* Contrast Pair 1 */}
                <div>
                    <div className="reveal-text font-sans text-sm md:text-base text-background/60 mb-6 uppercase tracking-widest font-medium">
                        Most of real estate focuses on: closing the next deal.
                    </div>
                    <h2 className="reveal-text text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-heading font-medium">
                        Jeff focuses on:<br />
                        <span className="font-drama italic">building the <span className="text-accent underline decoration-accent/30 underline-offset-[12px] decoration-[2px]">system</span></span><br />
                        <span className="font-drama italic">that closes thousands.</span>
                    </h2>
                </div>

                {/* Contrast Pair 2 */}
                <div className="ml-auto w-full md:w-4/5 text-right">
                    <div className="reveal-text font-sans text-sm md:text-base text-background/60 mb-6 uppercase tracking-widest font-medium">
                        Most coaches teach: scripts and tactics.
                    </div>
                    <h2 className="reveal-text text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-heading font-medium">
                        Jeff teaches:<br />
                        <span className="font-drama italic">how to build an <span className="text-accent underline decoration-accent/30 underline-offset-[12px] decoration-[2px]">empire.</span></span>
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
