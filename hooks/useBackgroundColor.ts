import { useState, useEffect } from 'react';

export function useBackgroundColor() {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const checkBackground = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        const element = document.elementFromPoint(rect.left + rect.width / 2, rect.bottom + 1);
        if (element) {
          const backgroundColor = window.getComputedStyle(element).backgroundColor;
          const rgb = backgroundColor.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            setIsDarkBackground(brightness < 128);
          }
        }
      }
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground);
    const resizeObserver = new ResizeObserver(checkBackground);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', checkBackground);
      resizeObserver.disconnect();
    };
  }, []);

  return isDarkBackground;
}

