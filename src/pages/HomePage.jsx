import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { WhatIDoSection } from '../sections/WhatIDoSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ApproachSection } from '../sections/ApproachSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { JourneySection } from '../sections/JourneySection';
import { GithubSection } from '../sections/GithubSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <SkillsSection />
      <ApproachSection />
      <ProjectsSection />
      <JourneySection />
      <GithubSection />
      <ContactSection />
    </main>
  );
};
