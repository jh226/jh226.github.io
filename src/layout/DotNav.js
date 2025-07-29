import React, { useEffect, useState } from 'react';
import './DotNav.css';

const sections = ['home', 'aboutMe', 'project'];

function DotNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // 60% 보이면 해당 섹션으로 인식
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dot-nav">
      {sections.map((id) => (
        <div
          key={id}
          className={`dot ${activeSection === id ? 'active' : ''}`}
          onClick={() => handleScroll(id)}
        />
      ))}
    </div>
  );
}

export default DotNav;
