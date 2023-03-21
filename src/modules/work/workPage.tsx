import { Container } from '@/shared/components/container';
import { PopInAnimation } from '@/shared/components/popIn';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const WorkPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      className="work-bg"
      containerClass="lg:gap-16 lg:!gap-y-0 h-full items-start"
    >
      <div className="grow w-full h-full flex flex-col justify-around">
        <PopInAnimation>
          <h1 className="mt-8 mb-0">MY WORK</h1>
        </PopInAnimation>
        <div
          className="flex flex-col gap-2 lg:gap-16 uppercase font-title
        w-full text-xl overflow-hidden mt-12 @md:self-center"
        >
          <div className="flex flex-col gap-8 lg:gap-12 ml-8">
            <PopInAnimation delay={0.5}>
              <NavLink to="andreas">PROMOTING NEW MUSIC</NavLink>
            </PopInAnimation>
            {/* <PopInAnimation delay={0.7}>
              <NavLink
                to="brujula"
                className="font-alt font-extrabold uppercase"
              >
                Connecting The Mexican Audiovisual Industry
              </NavLink>
            </PopInAnimation> */}
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
