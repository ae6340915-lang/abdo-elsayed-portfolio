import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { WhatIDoSection } from '../sections/WhatIDoSection';
import { SkillsSection } from '../sections/SkillsSection';
import { SoftSkillsSection } from '../sections/SoftSkillsSection';
import { ApproachSection } from '../sections/ApproachSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { CertificatesSection } from '../sections/CertificatesSection';
import { JourneySection } from '../sections/JourneySection';
import { GithubSection } from '../sections/GithubSection';
import { ContactSection } from '../sections/ContactSection';
import { FreelanceSection } from '../sections/FreelanceSection';

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <SkillsSection />
      <SoftSkillsSection />
      <ApproachSection />
      <ProjectsSection />
      <CertificatesSection />
      <JourneySection />
      <GithubSection />
      <ContactSection />
      <FreelanceSection />
    </main>
  );
};
