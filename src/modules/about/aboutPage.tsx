import { useEffect } from 'react';

import { Container } from '#shared/components/container';
import { PopInAnimation } from '#/shared/components/popIn';
import { NavLink } from '#/shared/components/navlink';

import { LatestPage } from './latest/latestPage';
import { Technologies } from './components/technologies';

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
      <section className="flex flex-col gap-8 pt-8">
        <PopInAnimation delay={0.3}>
          <h1 className="font-thin">About Me</h1>
        </PopInAnimation>
        <PopInAnimation delay={0.6}>
          <p className="w-full shadow">
            I specialize in the web. Building fully fledged experiences from UI
            design to deployment. I have experience in dynamic teams that use
            agile methodologies to deliver value quickly.
          </p>
        </PopInAnimation>
        <PopInAnimation delay={0.7}>
          <p className="w-full shadow">
            I'm an avid self-learner with the goal of merging deep technical
            skills and design thinking to add value to products by building
            robust systems and workflows that focus on being efficient and
            pleasant to use.
          </p>
        </PopInAnimation>
        <PopInAnimation delay={0.8}>
          <p className="w-full">
            On my free time I listen to music, watch movies, take photos, and
            build{' '}
            <NavLink
              to="/projects"
              className="text-amber-500 underline"
            >
              <span className="!text-white hover:!text-amber-400">
                side projects
              </span>
            </NavLink>
          </p>
        </PopInAnimation>
      </section>
      <section className="mb-4 grid grid-cols-1 justify-start gap-4 overscroll-auto @container">
        <div className="relative my-8 flex flex-col gap-8">
          <PopInAnimation delay={0.3}>
            <h2 className="mb-0 text-lg font-thin">
              Professional and Educational History
            </h2>
          </PopInAnimation>
          <PopInAnimation
            delay={0.4}
            className="flex flex-col gap-2"
          >
            <a
              href="https://metabaseq.com"
              className="!text-amber-500 underline"
            >
              <h3 className="mb-0 font-alt text-base font-extrabold !text-white hover:!text-amber-400">
                Metabase Q{' '}
              </h3>
            </a>
            <a
              href="https://www.metabaseq.com/platform/"
              target="_blank"
              className="!text-amber-500 !underline"
            >
              <p className="italic-serif text-sm !text-white hover:!text-amber-400">
                SOFTWARE ENGINEER -{' '}
                <span className="font-sans text-xs font-extralight not-italic">
                  AUGUST 2022 - PRESENT DAY
                </span>
              </p>
            </a>
            <p className="italic-serif text-sm">
              DEVELOPMENT/UX ENGINEER -{' '}
              <span className="font-sans text-xs font-extralight not-italic">
                APRIL 2022 - AUGUST 2022
              </span>
            </p>
            <p className="italic-serif text-sm">
              TECHNICAL MARKETING ASSOCIATE -{' '}
              <span className="font-sans text-xs font-extralight not-italic">
                DECEMBER 2021 - APRIL 2022
              </span>
            </p>
            <p className="italic-serif text-sm">
              WEBSITE DEVELOPER -{' '}
              <span className="font-sans text-xs font-extralight not-italic">
                JANUARY 2021 - DECEMBER 2021
              </span>
            </p>
          </PopInAnimation>
          <PopInAnimation
            delay={0.8}
            className="flex flex-col gap-2"
          >
            <h3 className="font-alt text-base font-extrabold">
              Tecnológico de Monterrey{' '}
            </h3>
            <p className="italic-serif text-sm uppercase">
              B.S. in Computer Science and Tecnology -{' '}
              <span className="font-sans text-xs font-extralight not-italic">
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
