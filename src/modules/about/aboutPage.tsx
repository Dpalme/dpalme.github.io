import { Container } from '@shared/components/container';
import { Technologies } from './components/technologies';
import { PopInAnimation } from '@/shared/components/popIn';
import { LatestPage } from './latest/latestPage';
import { useEffect } from 'react';
import { NavLink } from '@/shared/components/navlink';

import smSrc from '@assets/backgrounds/about/aboutsm.jpeg';
import mdSrc from '@assets/backgrounds/about/aboutmd.jpeg';
import xlSrc from '@assets/backgrounds/about/aboutxl.jpeg';

export function AboutPage() {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);

  return (
    <Container
      backgroundImage={{ smSrc, mdSrc, xlSrc }}
      className="about-bg"
      containerClass="min-h-full items-start lg:grid-cols-[2fr_3fr]
      gap-12 lg:gap-x-32 gap-y-8"
    >
      <section className="flex flex-col gap-8 pt-8">
        <PopInAnimation delay={0.3}>
          <h1 className="font-thin">About Me</h1>
        </PopInAnimation>
        <PopInAnimation delay={0.6}>
          <p className="w-full shadow">
            I take the "full" part of full-stack very seriously and have aimed
            to be able to understand not only the stack, but the business logic
            that surrounds it.
          </p>
        </PopInAnimation>
        <PopInAnimation delay={0.7}>
          <p className="w-full shadow">
            I'm an avid self-learner with the goal of merging deep technical
            skills and design thinking to create value for teams, users and
            clients alike by build robust systems and workflows that focus on
            being efficient and pleasant to use.
          </p>
        </PopInAnimation>
        <PopInAnimation delay={0.8}>
          <p className="w-full">
            On my free time I listen to music, watch movies, take photos, or
            build{' '}
            <NavLink to="/projects" className="text-emerald-500">
              side projects
            </NavLink>
          </p>
        </PopInAnimation>
      </section>
      <section className="grid grid-cols-1 items-center @container mb-4 gap-4 overscroll-auto">
        <div className="relative flex flex-col gap-8 my-8">
          <PopInAnimation delay={0.3}>
            <h2 className="font-thin text-base mb-0">
              Professional and Educational History
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="flex flex-col gap-2">
            <h3 className="font-alt font-extrabold text-sm mb-0">
              Metabase Q{' '}
            </h3>
            <p className="italic-serif text-sm">
              PRODUCT DEVELOPER -{' '}
              <span className="font-sans font-extralight not-italic text-xs">
                AUGUST 2022 - PRESENT DAY
              </span>
            </p>
            <p className="italic-serif text-sm">
              DEVELOPMENT/UX ENGINEER -{' '}
              <span className="font-sans font-extralight not-italic text-xs">
                APRIL 2022 - AUGUST 2022
              </span>
            </p>
            <p className="italic-serif text-sm">
              TECHNICAL MARKETING ASSOCIATE -{' '}
              <span className="font-sans font-extralight not-italic text-xs">
                DECEMBER 2021 - APRIL 2022
              </span>
            </p>
            <p className="italic-serif text-sm">
              WEBSITE DEVELOPER -{' '}
              <span className="font-sans font-extralight not-italic text-xs">
                JANUARY 2021 - DECEMBER 2021
              </span>
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.8} className="flex flex-col gap-2">
            <h3 className="font-alt font-extrabold text-sm">
              Tecnológico de Monterrey{' '}
            </h3>
            <p className="italic-serif text-sm uppercase">
              B.S. in Computer Science and Tecnology -{' '}
              <span className="font-sans font-extralight not-italic text-xs">
                AUGUST 2018 - DECEMBER 2022
              </span>
            </p>
          </PopInAnimation>
        </div>
        <Technologies />
      </section>
      <section className="col-span-full col-start-1 mt-32">
        <h2>Monitoring my hobbies</h2>
        <LatestPage />
      </section>
    </Container>
  );
}
export default AboutPage;
