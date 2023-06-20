import { NavLink } from 'react-router-dom';
import { WorkPageTemplate } from '../workTemplate';
import BackArrow from '@assets/icons/thin_big_left.min.svg';
import FigmaIcon from '@assets/logos/figma.min.svg';
import VueIcon from '@assets/logos/VueLogo.min.svg';
import AndreasScreens from '@assets/projects/andreas/andreas-screens.jpg';
import AndreasRef1 from '@assets/projects/andreas/andreas-ref1.jpg';
import AndreasRef2 from '@assets/projects/andreas/andreas-ref2.jpg';
import AndreasLighthouse from '@assets/projects/andreas/andreas-lighthouse.png';
import { PopInAnimation } from '@/shared/components/popIn';
import { TechCard } from '@/modules/about/components/technologies';
import { OtherProjects } from '../components/otherProjects';
import { ImageWithCaption } from '../components/imageWithCaption';
import { ProjectLinks } from '../components/ProjectLinks';
import { useEffect } from 'react';
import { TableOfContents } from '../components/tableOfContents';

export const AndreasPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--project-hue', '#769F70a0');
  }, []);

  return (
    <WorkPageTemplate className="items-start">
      <div className="grow flex flex-col gap-8 md:sticky top-0 md:row-span-2 lg:row-span-1">
        <div className="flex flex-col gap-2">
          <PopInAnimation delay={1}>
            <NavLink to="/work" className="flex flex-row gap-2 items-center">
              <img src={BackArrow} alt="Back" className="h-4 object-contain" />
              BACK
            </NavLink>
          </PopInAnimation>
          <h1 className="text-3xl lg:text-5xl">
            <PopInAnimation delay={0.2}>
              PROMOTING <br />
            </PopInAnimation>
            <PopInAnimation delay={0.4}>
              NEW <br />
            </PopInAnimation>
            <PopInAnimation delay={0.6}>
              <span className="font-alt font-extrabold">MUSIC</span>
            </PopInAnimation>
          </h1>
          <PopInAnimation delay={0.8}>
            <p className="italic font-alt font-normal">ANDREAS</p>
          </PopInAnimation>
        </div>
        <ProjectLinks
          liveSite="http://dpalmer.in/Andreas"
          sourceCode="https://github.com/Dpalme/Andreas"
        />
        <div className="flex flex-row gap-4 grayscale brightness-100">
          <TechCard logo={VueIcon} name="" />
          <TechCard logo={FigmaIcon} name="" />
        </div>
      </div>
      <TableOfContents />
      <div
        className="grow w-full flex flex-col gap-16 my-8 md:mt-0
      md:col-start-2 lg:col-start-auto"
      >
        <div className="">
          <PopInAnimation delay={0.4}>
            <h2 className="mb-0 text-sm font-alt font-extrabold" id="overview">
              Overview
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              Klaatu Suuns is a mexican psychedelic rock band popular in the
              indie scene of northern Mexico City. To celebrate their new
              single, they wanted a website that would drive fan interactions
              and social media presence for the single.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <p>
              The idea was that fans would enter the page, input their name and
              get a random flower for their name alongside a song
              recommendation. All whilst having a direct link to the music video
              on youtube.
            </p>
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
              Seeing as the main goal was driving traffic to the music video,
              the main CTA needed to be to go see it. This meant the main user
              interaction was to leave the site. The band’s idea was for it to
              be used to post instagram stories, so the SEO hit for low user
              retention wasn't a deal breaker.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-2">
            <p>
              Since it was going to be mainly advertised in instagram, the
              design needed to be mobile fist, and being a collaboration with an
              american band, there needed to be an option to see the page in
              both english and spanish.
            </p>
          </PopInAnimation>
        </div>
        <div className="overflow-hidden">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="client-references"
            >
              Client References
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="pb-16">
            <ImageWithCaption
              imageUrl={AndreasRef1}
              altText="Andreas Song Cover Art"
              caption="The cover art for the single."
            />
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <ImageWithCaption
              imageUrl={AndreasRef2}
              altText="Andreas Song Cover Art"
              caption="Pictures from the music video's promotional photo-shoot."
            />
          </PopInAnimation>
        </div>
        <div className="">
          <PopInAnimation delay={0.4} className="mb-2">
            <h2
              className="mb-0 text-sm font-alt font-extrabold"
              id="the-design"
            >
              The Design
            </h2>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              Taking everything into consideration I decided to use a minimal,
              free-flow setup. Firstly I incorporated the obi strip from the
              cover art into the design, I set its width at 320px across so that
              it can fit a slim phone or a big screen without losing it's
              internal structure and "strip" feel.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              I also placed a big play button in the center to act as a link to
              the music video. Placing outbound links as your main CTA drives
              SEO down, but since word of mouth was going to be the main source
              of traffic, it didn't matter.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              Finally I defined three main states: Default, Inputting name,
              Results screen.
              <br /> This later helped structure the code and understand the
              cohesion between components.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <ImageWithCaption
              imageUrl={AndreasScreens}
              altText="Figma board with three breakpoints and three states"
              caption="Figma design with the three identified states on
              three different breakpoints."
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
              Seeing as it was a mobile first website, I wanted low loading
              times and a quick "first-paint".
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              With this in mind I opted for petite-vue, a CDN hosted minimal
              version of Vue that allows HTML to do the first "paintful" of
              content and adds interaction after the fact.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              The client provided me with a list of ~30 flowers and songs. To
              provide a repeatable result of flower and song for each name, the
              input is hashed with md5 and converted to a number to select from
              the list of flowers and songs.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4} className="mb-4">
            <p>
              Animations were added in css for maximum compatibility and
              hardware optimization. Whilst images were optimized for the web.
              This means the page loads quickly, the images look good and the
              animations don't stutter.
            </p>
          </PopInAnimation>
          <PopInAnimation delay={0.4}>
            <ImageWithCaption
              imageUrl={AndreasLighthouse}
              altText="Andreas Song Cover Art"
              caption="Lighthouse report for the page."
            />
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
              Sadly, the campaign did not go live as the band decided to go in
              another direction with the release of the single, none the less,{' '}
              <a
                href="https://dpalmer.in/Andreas"
                className="text-amber-400"
                target="_blank"
              >
                the website is up and running
              </a>{' '}
              and showcases the merger between the band’s beautiful promotional
              photo-shoot and the interactivity of the medium.
            </p>
          </PopInAnimation>
          <div>
            <OtherProjects
              links={[
                // {
                //   link: '../brujula',
                //   label: 'Connecting The Mexican Audiovisual Industry',
                // },
                { link: '../mrp', label: 'Digitalizing Test Taking' },
              ]}
            />
          </div>
        </div>
      </div>
    </WorkPageTemplate>
  );
};

export default AndreasPage;
