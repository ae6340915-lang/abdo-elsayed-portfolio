import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../sections/HeroSection';

const AboutSection = lazy(() => import('../sections/AboutSection').then((module) => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import('../sections/SkillsSection').then((module) => ({ default: module.SkillsSection })));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection })));
const EducationSection = lazy(() => import('../sections/EducationSection').then((module) => ({ default: module.EducationSection })));
const CertificatesSection = lazy(() => import('../sections/CertificatesSection').then((module) => ({ default: module.CertificatesSection })));
const ServicesSection = lazy(() => import('../sections/ServicesSection').then((module) => ({ default: module.ServicesSection })));
const FreelanceSection = lazy(() => import('../sections/FreelanceSection').then((module) => ({ default: module.FreelanceSection })));
const ContactSection = lazy(() => import('../sections/ContactSection').then((module) => ({ default: module.ContactSection })));

const SectionFallback = () => <div className="section-fallback" aria-hidden="true" />;

export const HomePage = () => (
  <main id="main-content">
    <HeroSection />
    <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><SkillsSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><ProjectsSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><EducationSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><CertificatesSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><ServicesSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><FreelanceSection /></Suspense>
    <Suspense fallback={<SectionFallback />}><ContactSection /></Suspense>
  </main>
);
