import { WorkPageTemplate } from '../workTemplate';
import BackArrow from '@assets/icons/thin_big_left.min.svg';
import FirebaseIcon from '@assets/logos/Firebase_Logo_Logomark.min.svg';
import ViteIcon from '@assets/logos/vite.min.svg';
import ReactIcon from '@assets/logos/React-icon.min.svg';
import TailwindIcon from '@assets/logos/Tailwind_CSS_Logo.min.svg';
import LandingPage from '@assets/projects/labrujula/landing.jpg';
import ProfilePage from '@assets/projects/labrujula/profile.jpg';
import SearchResults from '@assets/projects/labrujula/searchRes.jpg';
import { PopInAnimation } from '@/shared/components/popIn';
import { TechCard } from '@/modules/about/components/technologies';
import { ImageWithCaption } from '../components/imageWithCaption';
import { OtherProjects } from '../components/otherProjects';
import { ProjectLinks } from '../components/ProjectLinks';
import { useEffect } from 'react';
import { TableOfContents } from '../components/tableOfContents';
import { NavLink } from '@/shared/components/navlink';

export const BrujulaPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--project-hue', '45 123 191');
  }, []);

  return (
    <WorkPageTemplate
      className="items-start"
      bgClass="after:backdrop-hue-rotate-180 after:bg-[#00000001]"
    >
      <div className="grow flex flex-col gap-8 @lg:sticky top-0">
        <div className="flex flex-col gap-2">
          <PopInAnimation delay={2}>
            <NavLink to="/work" className="flex flex-row gap-2 items-center">
              <img src={BackArrow} alt="Back" className="h-4 object-contain" />
              BACK
            </NavLink>
          </PopInAnimation>
          <h1 className="text-5xl">
            <PopInAnimation delay={0.4}>
              CONNECTING THE
              <br />
            </PopInAnimation>
            <PopInAnimation delay={0.6}>
              <span className="font-alt font-extrabold">MEXICAN</span> <br />
            </PopInAnimation>
            <PopInAnimation delay={0.7}>
              Audiovisual <br />
            </PopInAnimation>
            <PopInAnimation delay={0.8}>
              <span className="font-alt font-extrabold">INDUSTRY</span>
            </PopInAnimation>
          </h1>
          <PopInAnimation delay={2}>
            <p className="italic font-alt font-normal">
              La Brújula Audiovisual
            </p>
          </PopInAnimation>
        </div>
        <ProjectLinks liveSite="http://labrujula.com.mx" />
        <div className="flex flex-row gap-4 grayscale brightness-100">
          <TechCard logo={FirebaseIcon} name="" />
          <TechCard logo={ViteIcon} name="" />
          <TechCard logo={ReactIcon} name="" />
          <TechCard logo={TailwindIcon} name="" />
        </div>
      </div>
      <TableOfContents />
      <div className="grow w-full flex flex-col gap-16 my-16">
        <div className="">
          <PopInAnimation delay={0.4}>
            <h2 className="mb-0 text-sm font-alt font-extrabold" id="overview">
              Overview
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              <i>La Brújula</i> has connected the mexican audiovisual and
              cinematographic industries for over 13 years by providing physical
              specialized phonebooks by region. Now, they want to go{' '}
              <i>digital</i>.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              The old system meant someone on the inside had to add you, and to
              use it, best you could hope for was CTRL + F.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>We can do better</p>
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="design-philosophy"
            >
              Design Philosophy
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              The client didn't have any brand guidelines besides a logo and the
              historical use of varying hues of blue.
              <br />
              There was a designer in the team that focused on creating UI
              interfaces. I helped her translate design to user experience by
              suggesting changes that would ensure a clearer user flow and CTAs.
            </p>
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={1.2}>
            <h2 className="text-sm font-alt font-extrabold">Gallery</h2>
          </PopInAnimation>
          <PopInAnimation delay={1.2}>
            <ImageWithCaption
              imageUrl={LandingPage}
              altText="La Brujula Landing Page"
              caption="The landing page for the page introduces the company and its mission."
            />
          </PopInAnimation>
          <PopInAnimation delay={1.2}>
            <ImageWithCaption
              imageUrl={SearchResults}
              altText="La Brujula Search Results Page"
              caption="Search results for cinematographer."
            />
          </PopInAnimation>
          <PopInAnimation delay={1.2}>
            <ImageWithCaption
              imageUrl={ProfilePage}
              altText="La Brujula Profile Page"
              caption="User profile page."
            />
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="technical-details"
            >
              Technical Details
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              We were a five person team. Three technical, one design, and the
              main client that acted as project manager.
              <br />
              As part of the technical team there was a senior team member that
              worked as consultant and made technical decisions.
              <br />
              The first big decision that was made was to use firebase as our
              backend. This sped up development time considerably, but its
              limitations deeply crippled what we could do for the remainder of
              the project and in general limited the functionality we could
              implement.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              The first big issue with Firebase is its database query engine.
              It's extremely limited in what you can search for (eg. it doesn't
              allow partial matching).
              <br />
              This caused many cases in which the client wanted something really
              specific but we couldn't implement it because of the limitations.
            </p>
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="project-achivements"
            >
              Project Achievements
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              In the end we launched the site in time and were able to promote
              it in the mexican festival circuit. We adjusted some things users
              let us know and have focused on maintaining the site instead of
              adding new functionality.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              The site has almost completely replaced the printed guides and
              serves hundreds of users daily.
            </p>
          </PopInAnimation>
        </div>
        <div>
          <OtherProjects
            links={[
              {
                link: '../andreas',
                label: 'Promoting New Music',
              },
              { link: '../mrp', label: 'Digitalizing Test Taking' },
            ]}
          />
        </div>
      </div>
    </WorkPageTemplate>
  );
};

export default BrujulaPage;
