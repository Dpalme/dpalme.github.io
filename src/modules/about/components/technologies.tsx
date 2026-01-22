import { PopInAnimation } from '#/shared/components/popIn';
import { ReactNode } from 'react';

const GridSeparator = (props: { title: string; delay?: number }) => {
  return (
    <PopInAnimation delay={0.8}>
      <h3
        className="italic-serif row-span-full gap-2
    overflow-visible text-base"
      >
        {[...props.title].map((letter, i) => (
          <span
            className="text-sm"
            key={letter + i}
          >
            {letter}
          </span>
        ))}
      </h3>
    </PopInAnimation>
  );
};

export const TechCard = (props: {
  logo?: string;
  name: string;
  i?: number;
}) => {
  return (
    <PopInAnimation delay={0.8 + (props.i || 1) / 10}>
      <p className="w-full truncate font-alt text-xs font-extrabold uppercase text-main">
        {props.logo ? (
          <img
            src={props.logo}
            className="size-6"
          />
        ) : (
          props.name
        )}
      </p>
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
      className="grid w-fit grid-cols-2 items-start gap-4 gap-y-8
    drop-shadow-md @md:grid-cols-3 @md:gap-12 @lg:grid-cols-4 @xl:grid-cols-5"
    >
      <TechCategory title="Frontend">
        <TechCard
          i={1}
          name="React"
        />
        <TechCard
          i={2}
          name="Tailwind"
        />
        <TechCard
          i={3}
          name="Three.js"
        />
        <TechCard
          i={4}
          name="HTML/CSS"
        />
      </TechCategory>
      <TechCategory title="Backend">
        <TechCard
          i={2}
          name="Python"
        />
        <TechCard
          i={3}
          name="Node.js"
        />
        <TechCard
          i={4}
          name="Go"
        />
      </TechCategory>
      <TechCategory title="Database">
        <TechCard
          i={3}
          name="MongoDB"
        />
        <TechCard
          i={4}
          name="PostgreSQL"
        />
        <TechCard
          i={5}
          name="DynamoDB"
        />
        <TechCard
          i={6}
          name="ElasticSearch"
        />
      </TechCategory>
      <TechCategory title="Cloud">
        <TechCard
          i={5}
          name="AWS"
        />
        <TechCard
          i={6}
          name="VPS"
        />
        <TechCard
          i={7}
          name="Terraform"
        />
      </TechCategory>
      <TechCategory title="Other">
        <TechCard
          i={6}
          name="Git"
        />
        <TechCard
          i={7}
          name="Figma"
        />
        <TechCard
          i={8}
          name="Docker"
        />
      </TechCategory>
    </div>
  );
};
