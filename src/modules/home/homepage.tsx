import { Container } from '#/shared/components/container';
import { PopInAnimation } from '#/shared/components/popIn';
import { m } from 'framer-motion';
import { useEffect } from 'react';
import { NavLink } from '#/shared/components/navlink';
import { HomeAnimation } from './homeAnimation';

export const HomePage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      className="home-bg"
      containerClass="w-full !grid-cols-1 h-full items-start justify-start !flex flex-col !gap-12"
    >
      <div className="max-w-md w-full">
        <h1 className="mb-2 flex flex-col w-full gap-4 justify-between">
          <PopInAnimation delay={0.5}>
            <div className="text-5xl flex flex-col">
              <span>DIEGO</span>{' '}
              <span className="font-alt text-3xl font-extrabold">PALMERÍN</span>
            </div>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
          <div className="w-full items-baseline text-lg font-bold">
              SOFTWARE{' '}
              <span className="italic">ENGINEER</span>
          </div>
            </PopInAnimation>
        </h1>
        <HomeAnimation />
        <m.p
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 1.5 }}
          animate={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="font-alt text-sm font-normal italic"
        >
          Building pleasant, ergonomic software
        </m.p>
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
    </Container>
  );
};

export default HomePage;
