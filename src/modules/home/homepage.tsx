import { Container } from '@/shared/components/container';
import { PopInAnimation } from '@/shared/components/popIn';
import { NavLink } from 'react-router-dom';
import { m } from 'framer-motion';
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      className="home-bg"
      containerClass="w-full h-full"
      nextPage="work"
    >
      <div className="max-w-sm">
        <h1 className="mb-2">
          <PopInAnimation delay={0.5}>
            <div className="text-lg">
              <span>DIEGO</span>{' '}
              <span className="font-alt font-extrabold">PALMERÍN</span>
            </div>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <span className="text-6xl">PRODUCT</span>
          </PopInAnimation>
          <PopInAnimation delay={1}>
            <span className="italic text-right text-xl block">DEVELOPER</span>
          </PopInAnimation>
        </h1>
        <m.p
          initial={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 1.5 }}
          animate={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="italic font-alt font-normal text-sm"
        >
          Merging Technical and Design Thinking
        </m.p>
      </div>
      <div className="grow flex justify-end flex-wrap md:text-lg">
        <div className="flex flex-col gap-16 lg:gap-32 text-right uppercase font-title max-w-md w-full">
          <PopInAnimation delay={1}>
            <NavLink to="/about" className="text-base">
              ABOUT <span className="font-alt font-extrabold">ME</span>
            </NavLink>
          </PopInAnimation>
          <PopInAnimation delay={0.5}>
            <div className="w-full text-center">
              <NavLink to="/work" className="text-6xl">
                MY WORK
              </NavLink>
            </div>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <div className="text-left w-full">
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
