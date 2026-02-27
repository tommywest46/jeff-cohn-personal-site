import React, { useState, useEffect, useRef } from 'react';

const EmpireShuffler = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'ERS Real Estate Group · eXp Realty', sub: '$3B+ career sales volume' },
        { id: 2, title: 'Elite Real Estate Systems · Coaching', sub: 'Training the next generation of team builders' },
        { id: 3, title: 'FinTech Platform · Coming Fall 2025', sub: 'Mortgage · Insurance · Title · CRM — one seamless experience' }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const next = [...prev];
                const last = next.pop();
                next.unshift(last);
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-3 tracking-tight">The Ecosystem</h3>
            <p className="text-sm font-medium text-text-dark/70 mb-10 leading-relaxed max-w-[90%]">Not a team. Not just a brokerage. A vertically integrated real estate operating system.</p>

            <div className="relative flex-grow min-h-[180px]">
                {cards.map((card, index) => {
                    const isTop = index === 0;
                    const isMiddle = index === 1;
                    const isBottom = index === 2;

                    let yOffset = 0;
                    let scale = 1;
                    let opacity = 1;
                    let zIndex = 30 - index * 10;

                    if (isMiddle) { yOffset = 20; scale = 0.95; opacity = 0.7; }
                    if (isBottom) { yOffset = 40; scale = 0.90; opacity = 0.4; }

                    return (
                        <div
                            key={card.id}
                            className="absolute top-0 left-0 w-full p-6 md:p-8 rounded-[2rem] bg-background border border-primary/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                            style={{
                                transform: `translateY(${yOffset}px) scale(${scale})`,
                                opacity,
                                zIndex
                            }}
                        >
                            <div className="font-heading font-bold text-lg mb-2">{card.title}</div>
                            <div className="font-data text-xs text-text-dark/60 uppercase tracking-wider">{card.sub}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const PodcastPulse = () => {
    const episodes = [
        'EP 349 · "Scaling Past 100 Agents Without Losing Culture"',
        'EP 342 · "The Ancillary Revenue Playbook for Team Leaders"',
        'EP 335 · "Why the One-Stop-Shop Model Wins Every Time"',
        'EP 328 · "From Rookie to #1 — Lessons From 10,000 Transactions"'
    ];

    const [currentEpIndex, setCurrentEpIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (isTyping) {
            if (typedText.length < episodes[currentEpIndex].length) {
                timeout = setTimeout(() => {
                    setTypedText(episodes[currentEpIndex].slice(0, typedText.length + 1));
                }, 30); // typing speed
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2500); // pause before clearing
            }
        } else {
            setTypedText('');
            setCurrentEpIndex((prev) => (prev + 1) % episodes.length);
            setIsTyping(true);
        }
        return () => clearTimeout(timeout);
    }, [typedText, isTyping, currentEpIndex, episodes]);

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-3 tracking-tight">Podcast</h3>
            <p className="text-sm font-medium text-text-dark/70 mb-10 leading-relaxed max-w-[90%]">349+ episodes. The sharpest minds in real estate. Every week.</p>

            <div className="flex-grow flex flex-col justify-center rounded-[2rem] bg-primary text-background p-8 shadow-inner relative overflow-hidden group border border-primary/10">
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_8px_rgba(201,168,76,0.6)]"></div>
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-bold">Now Streaming</span>
                    <span className="ml-auto font-data text-[10px] opacity-50 text-right uppercase tracking-widest hidden sm:block">100K+ Annual Dls</span>
                </div>

                <div className="font-data text-sm md:text-base leading-relaxed h-[80px]">
                    {typedText}
                    <span className="inline-block w-[10px] h-[18px] bg-accent ml-1.5 align-middle animate-pulse"></span>
                </div>
            </div>
        </div>
    );
};

const TrajectoryTimeline = () => {
    const nodes = [
        { year: '2006', label: 'Rookie of the Year · NP Dodge' },
        { year: '2018', label: '#1 Team Worldwide · Berkshire Hathaway' },
        { year: '2020', label: 'Launched kwELITE · 100 Agents in Year One' },
        { year: '2025', label: 'ERS × eXp Realty Partnership' },
        { year: '2025', label: 'FinTech Platform Launch' }
    ];

    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef(null);

    useEffect(() => {
        const cycleNodes = () => {
            setActiveIndex(-1);
            let step = -1;
            const interval = setInterval(() => {
                step++;
                if (step < nodes.length) {
                    setActiveIndex(step);
                } else {
                    clearInterval(interval);
                    setTimeout(cycleNodes, 4000);
                }
            }, 700);
            return interval;
        };

        const intervalId = cycleNodes();
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col h-full">
            <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-3 tracking-tight">The Arc</h3>
            <p className="text-sm font-medium text-text-dark/70 mb-8 leading-relaxed max-w-[90%]">From day one to industry-defining. Every move intentional.</p>

            <div className="flex-grow pl-2 md:pl-6 relative" ref={containerRef}>
                <div className="absolute left-[15px] md:left-[31px] top-3 bottom-5 w-[2px] bg-primary/10"></div>

                <svg className="absolute left-[15px] md:left-[31px] top-3 bottom-5 w-[2px] h-[calc(100%-2rem)] overflow-visible" preserveAspectRatio="none">
                    <line
                        x1="0" y1="0" x2="0" y2="100%"
                        stroke="#C9A84C" strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset={100 - ((activeIndex + 1) / nodes.length * 100)}
                        className="transition-all duration-[700ms] ease-linear"
                        pathLength="100"
                    />
                </svg>

                <div className="flex flex-col justify-between h-[250px] relative z-10">
                    {nodes.map((node, i) => {
                        const isActive = i <= activeIndex;
                        const isJustActivated = i === activeIndex;

                        return (
                            <div key={i} className="flex items-center gap-6 group">
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    {/* Cursor click effect */}
                                    <div className={`absolute inset-0 rounded-full border border-accent transition-all duration-500 ease-out ${isJustActivated ? 'scale-[2.5] opacity-0' : 'scale-100 opacity-0'}`}></div>
                                    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-accent shadow-[0_0_12px_rgba(201,168,76,0.8)]' : 'bg-primary/20 bg-background border border-primary/20'} ${isJustActivated ? 'scale-[0.8]' : 'scale-100'}`}></div>
                                </div>
                                <div className={`transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                    <div className="font-heading font-bold text-[15px] mb-0.5">{node.year}</div>
                                    <div className="font-data text-[10px] md:text-xs text-text-dark/60 uppercase tracking-widest">{node.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-20">
            <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

                <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(13,13,18,0.06)] border border-primary/5 hover:-translate-y-2 transition-transform duration-500 min-h-[460px] flex flex-col">
                    <EmpireShuffler />
                </div>

                <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(13,13,18,0.06)] border border-primary/5 hover:-translate-y-2 transition-transform duration-500 min-h-[460px] flex flex-col">
                    <PodcastPulse />
                </div>

                <div className="bg-background rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(13,13,18,0.06)] border border-primary/5 hover:-translate-y-2 transition-transform duration-500 min-h-[460px] flex flex-col">
                    <TrajectoryTimeline />
                </div>

            </div>
        </section>
    );
};

export default Features;
