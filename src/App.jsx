import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { IntroScreen } from './components/IntroScreen';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage').then((module) => ({ default: module.ProjectDetailsPage })));

const PageFallback = () => <div className="page-fallback" aria-hidden="true" />;

const AppRoutes = () => {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <IntroScreen />
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
