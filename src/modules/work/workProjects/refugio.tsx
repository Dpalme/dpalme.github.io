import { WorkPageTemplate } from '../workTemplate';
import BackArrow from '@assets/icons/thin_big_left.min.svg';
import FirebaseIcon from '@assets/logos/Firebase_Logo_Logomark.min.svg';
import ViteIcon from '@assets/logos/vite.min.svg';
import ReactIcon from '@assets/logos/React-icon.min.svg';
import TailwindIcon from '@assets/logos/Tailwind_CSS_Logo.min.svg';
// import MetabaseQThumb from '@assets/projects/labrujula/';
import { PopInAnimation } from '@/shared/components/popIn';
import { TechCard } from '@/modules/about/components/technologies';
import { ImageWithCaption } from '../components/imageWithCaption';
import { OtherProjects } from '../components/otherProjects';
import { ProjectLinks } from '../components/ProjectLinks';
import { useEffect } from 'react';
import { TableOfContents } from '../components/tableOfContents';
import { NavLink } from '@/shared/components/navlink';

export const RefugioPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--project-hue', '45 123 191');
  }, []);

  return (
    <WorkPageTemplate className="items-start">
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
        <PopInAnimation delay={0.7}>
          <h2 className="text-sm font-alt font-extrabold" id="overview">
            Overview
          </h2>
          <p></p>
        </PopInAnimation>
        <PopInAnimation delay={0.7}>
          <h2
            className="text-sm font-alt font-extrabold"
            id="design-philosophy"
          >
            Design Philosophy
          </h2>
          <p></p>
        </PopInAnimation>
        <PopInAnimation delay={1.2}>
          <h2 className="text-sm font-alt font-extrabold">Gallery</h2>
        </PopInAnimation>
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

export default RefugioPage;
