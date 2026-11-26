import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    const observeExisting = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
        if (element.dataset.revealObserved) return;
        element.dataset.revealObserved = 'true';
        observer.observe(element);
      });
    };

    observeExisting();

    const mutations = new MutationObserver(observeExisting);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
};
