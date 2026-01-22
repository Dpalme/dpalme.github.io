import { useEffect } from 'react';

import { Container } from '#shared/components/container';
import { PopInAnimation } from '#/shared/components/popIn';
import { NavLink } from '#/shared/components/navlink';

import { Technologies } from './components/technologies';
import { AboutContent } from './components/aboutContent';

export function AboutPage() {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      className="about-bg"
      containerClass="min-h-full items-start lg:grid-cols-[2fr_3fr]
      gap-12 lg:gap-x-32 gap-y-8"
    >
      <AboutContent />
    </Container>
  );
}
export default AboutPage;
