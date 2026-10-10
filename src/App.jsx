import React, { useState, useRef, useEffect } from 'react';
import ConstellationCanvas from './components/ConstellationCanvas';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const contentSectionRef = useRef(null);

  // Track mouse coordinates for ambient studio spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    // Smoothly scroll down towards the content if user is near top
    if (window.scrollY < 400 && contentSectionRef.current) {
      const topOffset = contentSectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0e17] text-[#f8fafc] font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Interactive Constellation Neural Canvas */}
      <ConstellationCanvas />

      {/* Mouse Follow Ambient Spotlight Glow (Desktop subtle accent) */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), rgba(139, 92, 246, 0.03), transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Top Ambient Gradient Orbs */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 rounded-full bg-violet-600/10 blur-[130px] -z-10" 
        aria-hidden="true" 
      />

      {/* Hero Section */}
      <HeroSection onContactClick={scrollToContact} />

      {/* Sticky Floating Tab Navigation */}
      <Navbar 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onContactClick={scrollToContact} 
      />

      {/* Main Dynamic Tab Content Container */}
      <main 
        ref={contentSectionRef} 
        id="main-content" 
        className="relative z-20 px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto min-h-[550px]"
      >
        {activeTab === 'experience' && <ExperienceSection key="experience" />}
        {activeTab === 'education' && <EducationSection key="education" />}
        {activeTab === 'projects' && <ProjectsSection key="projects" />}
        {activeTab === 'skills' && <SkillsSection key="skills" />}
        {activeTab === 'achievements' && <AchievementsSection key="achievements" />}
      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Minimal Studio Footer */}
      <Footer />

    </div>
  );
}
