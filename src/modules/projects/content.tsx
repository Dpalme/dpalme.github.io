import { PopInAnimation } from '@/shared/components/popIn';

const ProjectLink = (props: {
  link: string;
  name: string;
  description: string;
  i: number;
}) => {
  return (
    <tr className="hover:-translate-y-2 hover:translate-x-1 transition-transform pr-2">
      <td className="">
        <a href={props.link} target="_blank">
          <PopInAnimation delay={0.5 + props.i / 10} className="py-2 pr-2">
            <h3 className="w-fit text-xl font-light italic">{props.name}</h3>
          </PopInAnimation>
        </a>
      </td>
      <td>
        <a href={props.link} target="_blank">
          <PopInAnimation delay={0.6 + props.i / 10} className="py-2 pl-2">
            <p className="font-sans text-sm pr-2">{props.description}</p>
          </PopInAnimation>
        </a>
      </td>
    </tr>
  );
};

const AboutContent = () => {
  return (
    <>
      <PopInAnimation delay={0.3} className="mt-8">
        <h1 className="overflow-visible pb-2">PROJECTS</h1>
      </PopInAnimation>
      <table
        className="shrink justify-stretch text-xl text-left
        uppercase font-title w-full md:items-end gap-x-12"
      >
        <thead className="hidden">
          <tr>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <ProjectLink
            link="https://posterify.dpalmer.in/"
            name="Posterify"
            description="A PWA to browse and save poster art and stills from movies"
            i={1}
          />
          <ProjectLink
            link="https://visualizer.dpalmer.in"
            name="VISUALIZER"
            description="A spotify connected 3d visualizer using three.js and custom
          shaders"
            i={2}
          />
          <ProjectLink
            link="https://palabr.dpalmer.in/"
            name="PALABR"
            description="A wordle clone for spanish to play with my gf"
            i={3}
          />
          <ProjectLink
            link="https://dpalmer.in/Peoria"
            name="PEORIA"
            description="A lightweight css library and js client side rendering framework"
            i={3}
          />
          <ProjectLink
            link="https://dpalmer.in/Random"
            name="Random"
            description="A collection of poems, books, songs, and albums I like given out at
          random"
            i={4}
          />
          <ProjectLink
            link="https://dpalmer.in/Becquer"
            name="BÉCQUER"
            description="A randomly generated stanza based on the work of Gustavo Adolfo
          Bécquer"
            i={5}
          />
          <ProjectLink
            link="https://dpalmer.in/2119"
            name="2119"
            description="A minimalist randomly generated terrain exploration game"
            i={6}
          />
        </tbody>
      </table>
    </>
  );
};

export default AboutContent;
