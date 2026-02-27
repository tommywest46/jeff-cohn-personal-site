import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#08080A] text-background rounded-t-[4rem] px-8 md:px-16 lg:px-24 pt-24 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 relative z-10">

                {/* Column 1 */}
                <div className="flex flex-col">
                    <div className="text-2xl font-heading font-bold tracking-[0.1em] text-primary bg-accent px-4 py-1.5 w-fit rounded-full mb-6 relative">
                        JEFF COHN
                        <div className="absolute inset-0 shadow-[0_0_15px_rgba(201,168,76,0.4)] rounded-full pointer-events-none"></div>
                    </div>
                    <p className="text-background/60 text-sm font-medium leading-relaxed max-w-xs">
                        Building empires. Developing people. Reshaping real estate.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                    <div className="font-data text-xs text-accent uppercase tracking-widest mb-2">Navigation</div>
                    <a href="#features" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">About</a>
                    <a href="#philosophy" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Ecosystem</a>
                    <a href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Podcast</a>
                    <a href="#philosophy" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Philosophy</a>
                    <a href="#contact" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Connect</a>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-4">
                    <div className="font-data text-xs text-accent uppercase tracking-widest mb-2">Social & Links</div>
                    <a href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Apple Podcasts</a>
                    <a href="#" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">ERS Website</a>
                    <a href="#" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">ERS Foundation</a>
                    <a href="#" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">LinkedIn</a>
                    <a href="#" className="text-sm text-background/70 hover:text-accent transition-colors w-fit interactive-link">Instagram</a>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col justify-between">
                    <div className="font-data text-xs text-accent uppercase tracking-widest mb-6 lg:mb-2">System Status</div>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="font-data text-[11px] uppercase tracking-wider text-background/80">BUILDING IN PROGRESS</span>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <div className="text-xs text-background/40 font-medium">
                    © 2025 Jeff Cohn. All rights reserved.
                </div>
                <div className="text-xs text-background/40 font-medium tracking-wide">
                    DESIGNED WITH INTENT
                </div>
            </div>
        </footer>
    );
};

export default Footer;
