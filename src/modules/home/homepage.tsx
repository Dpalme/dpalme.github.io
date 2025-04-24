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
      containerClass="w-full h-full"
    >
      <div className="max-w-md">
        <h1 className="mb-2 flex flex-col gap-8">
          <PopInAnimation delay={0.5}>
            <div className="text-lg">
              <span>DIEGO</span>{' '}
              <span className="font-alt font-extrabold">PALMERÍN</span>
            </div>
          </PopInAnimation>
          <div className="flex flex-col">
            <PopInAnimation delay={0.7}>
              <span className="text-5xl font-bold">SOFTWARE</span>
            </PopInAnimation>
            <PopInAnimation delay={1}>
              <span className="text-right text-3xl italic">ENGINEER</span>
            </PopInAnimation>
          </div>
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
      <div className="flex grow flex-wrap justify-end md:text-lg">
        <div className="flex w-full max-w-md flex-col gap-8 text-right font-title uppercase lg:gap-16">
          <PopInAnimation delay={1}>
            <NavLink
              to="/about"
              className="text-base"
            >
              ABOUT <span className="font-alt font-extrabold">ME</span>
            </NavLink>
          </PopInAnimation>
          <PopInAnimation delay={0.5}>
            <div className="w-full text-center">
              <NavLink
                to="/work"
                className="text-6xl"
              >
                MY WORK
              </NavLink>
            </div>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <div className="w-full text-left">
              <NavLink to="/projects">
                SIDE <span className="font-alt font-extrabold">PROJECTS</span>
              </NavLink>
            </div>
          </PopInAnimation>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
