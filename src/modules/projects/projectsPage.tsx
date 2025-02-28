import { Container } from '#/shared/components/container';
import { useEffect } from 'react';
import AboutContent from './content';

export const ProjectsPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);
  return (
    <Container
      className="projects-bg"
      containerClass="!grid-cols-1 lg:items-start !gap-8"
    >
      <AboutContent />
    </Container>
  );
};

export default ProjectsPage;
