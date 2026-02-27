import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        step: '01',
        label: 'VISION',
        title: "See what others won't",
        desc: "Jeff identified the one-stop-shop model years before the industry caught up. Every move starts with a conviction about where real estate is going — not where it's been.",
        Visual: () => (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <svg className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] animate-[spin_80s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
                    <circle cx="50" cy="50" r="10" strokeDasharray="2 4" />
                    <circle cx="50" cy="50" r="25" strokeDasharray="1 8" className="animate-[spin_40s_linear_infinite_reverse] origin-center" />
                    <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                    <path d="M 50 0 L 50 100 M 0 50 L 100 50" strokeDasharray="1 10" />
                </svg>
            </div>
        )
    },
    {
        step: '02',
        label: 'SYSTEMS',
        title: "Build the machine, not just the team",
        desc: "From CRM to coaching frameworks to FinTech integration — Jeff doesn't just hire agents, he engineers repeatable systems that scale without him in the room.",
        Visual: () => (
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent shadow-[0_0_30px_#C9A84C] animate-[scan_4s_linear_infinite]"></div>
            </div>
        )
    },
    {
        step: '03',
        label: 'MOMENTUM',
        title: "Compound every advantage",
        desc: "10,000 homes. $3 billion in volume. 349 podcast episodes. A foundation for affordable housing. Each piece amplifies the next. The flywheel never stops.",
        Visual: () => (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.15]">
                <svg className="w-full h-64" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path
                        d="M0,50 L200,50 L250,10 L300,90 L350,50 L1000,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        className="animate-[dash_3s_ease-out_infinite]"
                    />
                </svg>
            </div>
        )
    }
];

const Protocol = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${cards.length * 100}%`,
                    scrub: true,
                    pin: true,
                }
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                const prevCard = cards[i - 1];

                tl.to(prevCard, {
                    scale: 0.9,
                    filter: 'blur(20px)',
                    opacity: 0.3,
                    duration: 1
                }, i - 1)
                    .fromTo(card, {
                        yPercent: 100
                    }, {
                        yPercent: 0,
                        duration: 1,
                        ease: "none"
                    }, i - 1);
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocol" className="relative w-full h-[100dvh] bg-background overflow-hidden">
            {protocols.map((protocol, i) => (
                <div
                    key={i}
                    className="protocol-card absolute inset-0 w-full h-full bg-background flex flex-col justify-center px-6 md:px-16 lg:px-24 will-change-[transform,filter,opacity]"
                    style={{ zIndex: i + 1 }}
                >
                    <protocol.Visual />

                    <div className="relative z-10 max-w-4xl mx-auto w-full">
                        <div className="flex items-center gap-4 mb-8 text-accent">
                            <span className="font-heading font-medium text-lg">{protocol.step}</span>
                            <span className="w-8 h-[1px] bg-accent/30"></span>
                            <span className="font-data text-xs uppercase tracking-widest">{protocol.label}</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-[1.1]">
                            {protocol.title}
                        </h2>

                        <p className="text-lg md:text-xl text-text-dark/70 max-w-2xl leading-relaxed">
                            {protocol.desc}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Protocol;
