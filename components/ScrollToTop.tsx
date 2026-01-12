import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const skillsPosition = skillsSection.offsetTop;
                // Visible only if the user has scrolled to the skills section
                if (window.scrollY >= skillsPosition - 200) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 p-4 bg-primary text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary/90 hidden lg:flex items-center justify-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Retour en haut"
        >
            <ArrowUp size={24} strokeWidth={2.5} />
        </button>
    );
};
