import { Container } from '#/shared/components/container';
import { PopInAnimation } from '#/shared/components/popIn';
import { useEffect } from 'react';
import { NavLink } from '#/shared/components/navlink';

export const WorkPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      className="work-bg"
      containerClass="lg:gap-16 lg:!gap-y-0 h-full items-start"
    >
      <div className="flex h-full w-full grow flex-col justify-around">
        <PopInAnimation>
          <h1 className="mb-0 mt-8">MY WORK</h1>
        </PopInAnimation>
        <div
          className="mt-12 flex w-full flex-col gap-2 overflow-hidden
        font-title text-xl uppercase @md:self-center lg:gap-16"
        >
          <div className="ml-8 flex flex-col gap-8 lg:gap-12">
            <PopInAnimation delay={0.5}>
              <NavLink to="andreas">PROMOTING NEW MUSIC</NavLink>
            </PopInAnimation>
            <PopInAnimation delay={0.7}>
              <NavLink
                to="brujula"
                className="font-alt font-extrabold uppercase"
              >
                Connecting The Mexican Audiovisual Industry
              </NavLink>
            </PopInAnimation>
            <PopInAnimation delay={0.9}>
              <NavLink to="mrp">AUTOMATING TESTS AND GRADING</NavLink>
            </PopInAnimation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WorkPage;
