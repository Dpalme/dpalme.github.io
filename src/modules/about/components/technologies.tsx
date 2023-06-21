import ViteLogo from '@assets/logos/vite.min.svg';
import TailwindLogo from '@assets/logos/Tailwind_CSS_Logo.min.svg';
import TypescriptLogo from '@assets/logos/Typescript_logo_2020.min.svg';
import NodeJsLogo from '@assets/logos/Nodejs_logo.min.svg';
import PythonLogo from '@assets/logos/Python-logo-notext.min.svg';
import ReactLogo from '@assets/logos/React-icon.min.svg';
import HTMLLogo from '@assets/logos/HTML5_logo_and_wordmark.min.svg';
import GoLogo from '@assets/logos/Go_Logo_Blue.min.svg';
import FirebaseLogo from '@assets/logos/Firebase_Logo_Logomark.min.svg';
import CSSLogo from '@assets/logos/CSS3_logo_and_wordmark.min.svg';
import MongoDBLogo from '@assets/logos/MongoDbLogo.min.svg';
import SQLiteLogo from '@assets/logos/sqlite.min.svg';
import AWSLogo from '@assets/logos/AWS.min.svg';
import DigitalOceanLogo from '@assets/logos/DigitalOcean_logo.min.svg';
import GlitchLogo from '@assets/logos/glitch.min.svg';
import WebflowLogo from '@assets/logos/webflow.min.svg';
import PowerBiLogo from '@assets/logos/PBILogo.min.svg';
import FigmaLogo from '@assets/logos/figma.min.svg';
import ThreeJsLogo from '@assets/logos/threejs.min.svg';
import GithubLogo from '@assets/logos/github.min.svg';
import DockerLogo from '@assets/logos/docker.min.svg';
import { PopInAnimation } from '@/shared/components/popIn';
import { ReactNode } from 'react';

const GridSeparator = (props: { title: string; delay?: number }) => {
  return (
    <PopInAnimation delay={0.8}>
      <h3
        className="text-sm italic-serif overflow-visible
    row-span-full gap-2"
      >
        {[...props.title].map((letter, i) => (
          <span className="text-sm" key={letter + i}>
            {letter}
          </span>
        ))}
      </h3>
    </PopInAnimation>
  );
};

export const TechCard = (props: { logo: string; name: string; i?: number }) => {
  return (
    <PopInAnimation delay={0.8 + (props.i || 1) / 10}>
      <div className="grid grid-cols-[1rem_1fr] gap-1 items-center text-main w-full relative">
        <img
          src={props.logo}
          className="h-4 w-4 object-contain pointer-events-none brightness-200 grayscale"
          loading="lazy"
        />
        <p className="uppercase font-alt font-extrabold truncate w-full text-xs">
          {props.name}
        </p>
      </div>
    </PopInAnimation>
  );
};

export const TechCategory = (props: { title: string; children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <GridSeparator title={props.title} />
      <div className="grid grid-flow-row gap-4">{props.children}</div>
    </div>
  );
};

export const Technologies = () => {
  return (
    <div
      className="grid gap-4 gap-y-8 @md:gap-12 grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4
    @xl:grid-cols-5 drop-shadow-md w-fit mx-auto items-start"
    >
      <TechCategory title="Frontend">
        <TechCard i={1} logo={ReactLogo} name="React" />
        <TechCard i={2} logo={ThreeJsLogo} name="Three.js" />
        <TechCard i={3} logo={TailwindLogo} name="Tailwind" />
        <TechCard i={4} logo={HTMLLogo} name="HTML" />
        <TechCard i={5} logo={CSSLogo} name="CSS" />
        <TechCard i={6} logo={WebflowLogo} name="Webflow" />
      </TechCategory>
      <TechCategory title="Backend">
        <TechCard i={2} logo={NodeJsLogo} name="Node.js" />
        <TechCard i={3} logo={PythonLogo} name="Python" />
        <TechCard i={4} logo={GoLogo} name="Go" />
      </TechCategory>
      <TechCategory title="Database">
        <TechCard i={3} logo={MongoDBLogo} name="MongoDB" />
        <TechCard i={4} logo={SQLiteLogo} name="SQLite/SQL" />
      </TechCategory>
      <TechCategory title="Cloud">
        <TechCard i={5} logo={AWSLogo} name="AWS" />
        <TechCard i={6} logo={GlitchLogo} name="Glitch" />
        <TechCard i={7} logo={DigitalOceanLogo} name="Digital Ocean" />
        <TechCard i={8} logo={FirebaseLogo} name="Firebase" />
      </TechCategory>
      <TechCategory title="Other">
        <TechCard i={6} logo={TypescriptLogo} name="Typescript" />
        <TechCard i={7} logo={ViteLogo} name="Vite" />
        <TechCard i={8} logo={PowerBiLogo} name="PowerBi" />
        <TechCard i={9} logo={FigmaLogo} name="Figma" />
        <TechCard i={10} logo={GithubLogo} name="Github" />
        <TechCard i={11} logo={DockerLogo} name="Docker" />
      </TechCategory>
    </div>
  );
};
