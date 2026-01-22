import { Container } from '#/shared/components/container';
import { PopInAnimation } from '#/shared/components/popIn';
import { useEffect } from 'react';
import { NavLink } from '#/shared/components/navlink';
import { HomeAnimation } from './homeAnimation';
import { AboutContent } from '../about/components/aboutContent';

export const HomePage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <>
      <Container
        className="home-bg"
        containerClass="w-full !grid-cols-1 h-full items-start justify-start !flex flex-col !gap-12"
      >
        <div className="w-full max-w-md">
          <h1 className="mb-2 flex w-full flex-col justify-between gap-4">
            <PopInAnimation delay={0.5}>
              <div className="flex flex-col text-5xl">
                <span>DIEGO</span>{' '}
                <span className="font-alt text-3xl font-extrabold">
                  PALMERÍN
                </span>
              </div>
            </PopInAnimation>
            <PopInAnimation delay={0.7}>
              <div className="w-full items-baseline text-lg font-bold">
                SOFTWARE <span className="italic">ENGINEER</span>
              </div>
            </PopInAnimation>
          </h1>
          <HomeAnimation />
          <p
            className="font-alt text-sm font-normal italic"
          >
            Building pleasant, ergonomic software
          </p>
        </div>
        <div className="flex justify-start md:text-lg">
          <div className="flex w-full max-w-md flex-col gap-4 text-left font-title uppercase lg:gap-8">
            <PopInAnimation delay={0.5}>
              <div className="w-full">
                <NavLink
                  to="/work"
                  className="text-3xl"
                >
                  MY WORK
                </NavLink>
              </div>
            </PopInAnimation>
            <PopInAnimation delay={0.7}>
              <div className="w-full text-lg">
                <NavLink to="/projects">
                  SIDE <span className="font-alt font-extrabold">PROJECTS</span>
                </NavLink>
              </div>
            </PopInAnimation>
            <PopInAnimation delay={1}>
              <NavLink
                to="/about"
                className="text-base"
              >
                ABOUT <span className="font-alt font-extrabold">ME</span>
              </NavLink>
            </PopInAnimation>
          </div>
        </div>
        <AboutContent />
      </Container>
    </>
  );
};

export default HomePage;
