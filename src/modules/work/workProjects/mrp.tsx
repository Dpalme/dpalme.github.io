import { NavLink } from 'react-router-dom';
import { WorkPageTemplate } from '../workTemplate';
import BackArrow from '@/assets/thin_big_left.min.svg';
import ViteIcon from '@/assets/vite.min.svg';
import ReactIcon from '@/assets/React-icon.min.svg';
import TailwindIcon from '@/assets/Tailwind_CSS_Logo.min.svg';
import MRPRef1 from '@/assets/mrpRef1.jpg';
import MRPLogo from '@/assets/mrp_logo.png';
import MRPRef2 from '@/assets/mrpRef2.jpg';
import { PopInAnimation } from '@/shared/components/popIn';
import { TechCard } from '@/modules/about/components/technologies';
import { ImageWithCaption } from '../components/imageWithCaption';
import { OtherProjects } from '../components/otherProjects';
import { ProjectLinks } from '../components/ProjectLinks';
import { useEffect } from 'react';
import { TableOfContents } from '../components/tableOfContents';

export const MRPPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--project-hue', '#0082AEa0');
  }, []);

  return (
    <WorkPageTemplate className="items-start">
      <div className="grow flex flex-col gap-8 @lg:sticky top-0">
        <div className="flex flex-col gap-2">
          <PopInAnimation delay={1.5}>
            <NavLink to="/work" className="flex flex-row gap-2 items-center">
              <img src={BackArrow} alt="Back" className="h-4 object-contain" />
              BACK
            </NavLink>
          </PopInAnimation>
          <h1 className="text-3xl lg:text-5xl">
            <PopInAnimation delay={0.4}>
              AUTOMATING <br />
              TEST <br />
            </PopInAnimation>
            <PopInAnimation delay={0.6}>
              <span className="font-alt font-extrabold">TAKING</span> AND
              <br />
            </PopInAnimation>
            <PopInAnimation delay={0.8} className="font-alt font-extrabold">
              GRADING
            </PopInAnimation>
          </h1>
          <PopInAnimation delay={1.5}>
            <p className="italic font-alt font-normal">
              MRP Cursos y Certificaciones
            </p>
          </PopInAnimation>
        </div>
        <ProjectLinks sourceCode="https://github.com/Dpalme/MRP.WebApp" />
        <div className="flex flex-row gap-4 grayscale brightness-100">
          <TechCard logo={ViteIcon} name="" />
          <TechCard logo={ReactIcon} name="" />
          <TechCard logo={TailwindIcon} name="" />
        </div>
      </div>
      <TableOfContents />
      <div className="grow w-full flex flex-col gap-16 my-16">
        <div className="flex flex-col gap-4">
          <PopInAnimation delay={0.7}>
            <h2 className="text-sm font-alt font-extrabold mb-0" id="overview">
              Overview
            </h2>
            <PopInAnimation delay={0.7}>
              <p>
                MRP has offered specialized IT courses and certifications since
                2003. When the COVID pandemic hit, they realized they needed to
                digitalize or die.
              </p>
            </PopInAnimation>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <p>
              With the rise in popularity of digital courses and certification
              exams, they sought to merge the best parts of both while
              streamlining their instructors' work.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <p>
              Seeing as there needed to be a clear separation between
              administrative tasks and user flows, we decided on a mobile
              application for users and an administrative page for MRP
              personnel.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <p>
              The team consisted of 6 people, all programmers. <br />
              We divided the project by specializations and I was tasked with
              leading the development of the Web Application due to my strong
              frontend and UI design background.
            </p>
          </PopInAnimation>
        </div>
        <div className="flex flex-col gap-4">
          <PopInAnimation delay={0.7}>
            <h2
              className="text-sm font-alt font-extrabold mb-0"
              id="design-philosophy"
            >
              Design Philosophy
            </h2>
            <PopInAnimation delay={0.7}>
              <p>
                The client didn't have any brand guidelines besides a logo and
                the use of varying hues of blue. This gave us the freedom to
                create a broader palette to enhance the UX of this new digital
                platform.
              </p>
            </PopInAnimation>
          </PopInAnimation>
        </div>
        <div className="flex flex-col gap-4">
          <PopInAnimation delay={0.7}>
            <h2
              className="text-sm font-alt font-extrabold mb-0"
              id="client-references"
            >
              Client References
            </h2>
            <ImageWithCaption
              imageUrl={MRPLogo}
              altText="MRP Logo"
              caption="The company's logo"
            />
          </PopInAnimation>
        </div>
        <div className="flex flex-col gap-4">
          <PopInAnimation delay={0.7}>
            <h2
              className="text-sm font-alt font-extrabold mb-0"
              id="the-design"
            >
              The design
            </h2>
            <p>
              The client wanted a minimalist "clean" look so we opted for a
              neumorphism adjacent aesthetic and design language with a reduced
              color palette, mainly using black & white, as well as having
              shadows on most elements to give depth to the page.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <ImageWithCaption
              imageUrl={MRPRef1}
              altText="MRP Landing Page"
              caption="Landing page for the web app"
            />
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <p>
              Working in the project late at night, a nice quality of life
              addition was the automatic dark mode that followed the OS
              preference.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <ImageWithCaption
              imageUrl={MRPRef2}
              altText="MRP Exams List"
              caption="The 'exams' view inside the web application"
            />
          </PopInAnimation>
        </div>
        <div className="flex flex-col gap-4">
          <PopInAnimation delay={0.7}>
            <h2
              className="text-sm font-alt font-extrabold mb-0"
              id="technical-details"
            >
              Technical Details
            </h2>
            <p>
              The project was unified as much as possible. The MERN tech stack
              was chosen early on for the back and frontend to facilitate
              collaboration amongst team members and sharing DTOs.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.7}>
            <p>
              The mobile app was built on Flutter instead of React native since
              it has better flexibility for component styling and better
              performance.
            </p>
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="project-achievements"
            >
              Project Achievements
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              The client was ecstatic with the final product, especially given
              it was developed from the ground up in 4 months. The
              administrative web app enabled the company to digitalize their
              workflow, allow manual sales of premium exams and automatized the
              grading teachers had to do by hand before.
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
              // {
              //   link: '../brujula',
              //   label: 'Connecting The Mexican Audiovisual Industry',
              // },
            ]}
          />
        </div>
      </div>
    </WorkPageTemplate>
  );
};

export default MRPPage;
