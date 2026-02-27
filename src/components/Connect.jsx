import React from 'react';

const Connect = () => {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-background relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Get Started</h2>
                    <p className="text-lg text-text-dark/60 font-medium">Choose your path into the ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">

                    {/* Card 1 */}
                    <div className="bg-background rounded-[2rem] p-10 border border-primary/10 shadow-sm hover:shadow-[0_10px_40px_rgba(13,13,18,0.05)] transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-heading font-bold mb-4">Listen</h3>
                        <p className="text-sm text-text-dark/70 mb-10 min-h-[40px]">The #1 Team Building Podcast. New episodes weekly.</p>
                        <a href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center gap-2 magnetic-btn bg-primary text-background py-4 rounded-full font-medium text-sm group">
                            Open Podcast
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Card 2 - middle highlighted */}
                    <div className="bg-primary text-background rounded-[2rem] p-10 shadow-[0_20px_60px_rgba(13,13,18,0.2)] md:scale-105 border border-primary/20 relative">
                        <div className="absolute inset-0 bg-accent/5 mix-blend-overlay rounded-[2rem] pointer-events-none"></div>
                        <h3 className="text-2xl font-heading font-bold mb-4">Learn</h3>
                        <p className="text-sm text-background/70 mb-10 min-h-[40px]">Coaching, workshops, and the annual Team Building Summit.</p>
                        <a href="https://eliterealestatesystems.com" target="_blank" rel="noopener noreferrer" className="inline-flex w-full justify-center items-center gap-2 magnetic-btn bg-accent text-primary py-4 rounded-full font-bold text-sm group shadow-[0_0_15px_rgba(201,168,76,0.3)] hover:shadow-[0_0_20px_rgba(201,168,76,0.5)]">
                            Explore ERS
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-background rounded-[2rem] p-10 border border-primary/10 shadow-sm hover:shadow-[0_10px_40px_rgba(13,13,18,0.05)] transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-2xl font-heading font-bold mb-4">Connect</h3>
                        <p className="text-sm text-text-dark/70 mb-10 min-h-[40px]">Speaking inquiries, partnerships, and press.</p>
                        <a href="mailto:jeff@example.com" className="inline-flex w-full justify-center items-center gap-2 magnetic-btn bg-primary text-background py-4 rounded-full font-medium text-sm group">
                            Get in Touch
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Connect;
