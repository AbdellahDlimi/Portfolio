import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Désactiver sur les appareils tactiles / mobiles
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Positionnement instantané du point central jaune
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      setIsVisible(true);

      // Détecter si on survole un élément cliquable (liens, boutons, inputs, etc.)
      const target = e.target;
      const interactive = Boolean(
        target && target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
      );
      setIsHovered(interactive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => {
      setIsVisible(false);
      setIsClicked(false);
      setIsHovered(false);
    };
    const onMouseEnter = () => setIsVisible(true);
    const onWindowBlur = () => {
      setIsClicked(false);
      setIsHovered(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('blur', onWindowBlur);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Animation 60/120 FPS ultra fluide avec inertie pour l'anneau extérieur
    const render = () => {
      ringX += (mouseX - ringX) * 0.16; // facteur d'inertie fluide
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('blur', onWindowBlur);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Grand anneau extérieur avec halo translucide jaune / ambre */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-yellow-400/55 bg-yellow-400/10 backdrop-blur-[0.5px] shadow-[0_0_25px_rgba(250,204,21,0.35)] will-change-transform transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out ${
          isHovered
            ? 'border-yellow-300 bg-yellow-400/20 shadow-[0_0_35px_rgba(250,204,21,0.55)]'
            : isClicked
            ? 'border-amber-400 bg-amber-400/25'
            : ''
        }`}
        style={{
          width: isHovered ? '66px' : isClicked ? '44px' : '52px',
          height: isHovered ? '66px' : isClicked ? '44px' : '52px',
        }}
      />

      {/* 2. Point central solide jaune lumineux (comme l'image demandée) */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-400 to-yellow-300 shadow-[0_0_14px_rgba(250,204,21,0.95)] will-change-transform transition-[width,height,transform] duration-100 ease-out ${
          isHovered ? 'scale-90' : isClicked ? 'scale-125' : ''
        }`}
        style={{
          width: isHovered ? '16px' : isClicked ? '24px' : '20px',
          height: isHovered ? '16px' : isClicked ? '24px' : '20px',
        }}
      />
    </div>
  );
}

