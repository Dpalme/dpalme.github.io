import { Container } from '@/shared/components/container';
import { useEffect } from 'react';
import AboutContent from './content';
import smSrc from '@assets/backgrounds/projects/projectssm.jpeg';
import mdSrc from '@assets/backgrounds/projects/projectsmd.jpeg';
import xlSrc from '@assets/backgrounds/projects/projectsxl.jpeg';

export const ProjectsPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);
  return (
    <Container
      backgroundImage={{ smSrc, mdSrc, xlSrc }}
      className="projects-bg"
      containerClass="!grid-cols-1 lg:items-start !gap-8"
    >
      <AboutContent />
    </Container>
  );
};

export default ProjectsPage;
