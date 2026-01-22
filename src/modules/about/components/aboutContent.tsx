import { NavLink } from '#/shared/components/navlink';
import { PopInAnimation } from '#/shared/components/popIn';
import { Technologies } from './technologies';

export function AboutContent() {
  return (
    <>
      <section className="flex flex-col gap-4 pt-8">
        <PopInAnimation delay={0.3}>
          <h1 className="text-2xl font-thin">About Me</h1>
        </PopInAnimation>
        <div className="flex flex-col gap-2">
          <PopInAnimation delay={0.6}>
            <p className="w-full shadow">
              I specialize in the web. Building fully fledged experiences from
              UI design to deployment. I have experience in dynamic teams that
              use agile methodologies to deliver value quickly.
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
                className="text-[#bf8b73] underline"
              >
                <span className="!text-white hover:!text-[#bf8b73]">
                  side projects
                </span>
              </NavLink>
            </p>
          </PopInAnimation>
        </div>
      </section>
      <section className="mb-4 flex flex-col pb-16">
        <div className="relative my-8 flex flex-col gap-4">
          <PopInAnimation delay={0.3}>
            <h2 className="text-3xl font-thin">Experience</h2>
          </PopInAnimation>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <PopInAnimation
                delay={0.4}
                className="flex flex-col gap-2"
              >
                <a
                  href="https://lyft.com"
                  className="!text-[#bf8b73] underline"
                >
                  <h3 className="mb-0 font-alt text-base font-extrabold !text-white hover:!text-[#bf8b73]">
                    Lyft
                  </h3>
                </a>
                <h4 className="font-sans text-sm font-bold">
                  SOFTWARE ENGINEER -{' '}
                  <span className="font-sans text-xs font-extralight not-italic">
                    APRIL 2025 - PRESENT DAY
                  </span>
                </h4>
                <p className="text-base opacity-80">
                  Working on the B2B team to enable enterprise level scalability
                  and performance for all our customers and millions of riders.
                </p>
              </PopInAnimation>
              <PopInAnimation
                delay={0.4}
                className="flex flex-col gap-2"
              >
                <a
                  href="https://metabaseq.com"
                  className="!text-[#bf8b73] underline"
                >
                  <h3 className="mb-0 font-alt text-base font-extrabold !text-white hover:!text-[#bf8b73]">
                    Metabase Q{' '}
                  </h3>
                </a>
                <h4 className="font-sans text-sm font-bold">
                  SOFTWARE ENGINEER -{' '}
                  <span className="font-sans text-xs font-extralight not-italic">
                    AUGUST 2022 - APRIL 2025
                  </span>
                </h4>
                <p className="text-base opacity-80">
                  Built the flagship product that eventually became the sole
                  focus of the company, going so far as to rebrand the business
                  around it.
                  <br />
                  Served as a full-stack developer working on projects ranging
                  from scalability to user-centric feature design and
                  implementation.
                </p>
                <h4 className="font-sans text-sm font-bold">
                  DEVELOPMENT/UX ENGINEER -{' '}
                  <span className="font-sans text-xs font-extralight not-italic">
                    APRIL 2022 - AUGUST 2022
                  </span>
                </h4>
                <h4 className="font-sans text-sm font-bold">
                  WEBSITE DEVELOPER -{' '}
                  <span className="font-sans text-xs font-extralight not-italic">
                    JANUARY 2021 - APRIL 2022
                  </span>
                </h4>
              </PopInAnimation>
              <PopInAnimation
                delay={0.8}
                className="flex flex-col gap-2"
              >
                <h3 className="mb-0 font-alt text-base font-extrabold !text-white hover:!text-[#bf8b73]">
                  Freelance{' '}
                </h3>
                <h4 className="font-sans text-sm font-bold">
                  SOFTWARE ENGINEER -{' '}
                  <span className="font-sans text-xs font-extralight not-italic">
                    SEPTEMBER 2019 - PRESENT DAY
                  </span>
                </h4>
              </PopInAnimation>
            </div>
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
        </div>
        <Technologies />
      </section>
    </>
  );
}
