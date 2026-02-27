import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${scrolled ? 'bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg px-8 py-3' : 'bg-transparent px-6 py-4'} rounded-full flex items-center justify-between w-[90%] max-w-5xl`}>
            <div className={`text-xl font-heading font-bold tracking-[0.1em] transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-background'}`}>
                JEFF COHN
            </div>
            <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-500 ${scrolled ? 'text-text-dark' : 'text-background/80'}`}>
                <a href="#features" className="interactive-link hover:text-accent transition-colors">About</a>
                <a href="#philosophy" className="interactive-link hover:text-accent transition-colors">Ecosystem</a>
                <a href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230" target="_blank" rel="noopener noreferrer" className="interactive-link hover:text-accent transition-colors">Podcast</a>
                <a href="#contact" className="interactive-link hover:text-accent transition-colors">Contact</a>
            </div>
            <a
                href="https://podcasts.apple.com/us/podcast/team-building-podcast/id1136877230"
                target="_blank"
                rel="noopener noreferrer"
                className={`magnetic-btn hidden md:block px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${scrolled ? 'bg-accent text-primary hover:bg-accent/90' : 'bg-accent text-primary hover:bg-accent/90 shadow-[0_0_15px_rgba(201,168,76,0.3)]'}`}
            >
                <span className="relative z-10">Listen to the Podcast</span>
            </a>
        </nav>
    );
};

export default Navbar;
