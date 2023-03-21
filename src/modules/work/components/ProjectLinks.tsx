import { PopInAnimation } from '@/shared/components/popIn';
import LinkIcon from '@/assets/link.min.svg';
import CodeIcon from '@/assets/code-alt.min.svg';

const AnimatedLinkWithIcon = (props: {
  iconUrl: string;
  link: string;
  label: string;
  className?: string;
}) => {
  return (
    <PopInAnimation delay={0.5} className="grow w-full">
      <a
        href={props.link}
        className="font-alt italic font-normal uppercase shrink
              text-transparent flex flex-col gap-2 items-start
              justify-start w-auto
              hover:text-inherit group"
        target="_blank"
      >
        <img
          src={props.iconUrl}
          alt="Live Website"
          loading="lazy"
          className="h-6"
        />
        <span
          className={[
            'truncate inline-block opacity-0 group-hover:opacity-100',
            'origin-top w-0 group-hover:w-fit scale-0',
            'group-hover:scale-100 transition-all',
            props.className,
          ].join(' ')}
        >
          {props.label}
        </span>
      </a>
    </PopInAnimation>
  );
};

export const ProjectLinks = (props: {
  liveSite?: string;
  sourceCode?: string;
}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      {!!props.liveSite && (
        <AnimatedLinkWithIcon
          link={props.liveSite}
          iconUrl={LinkIcon}
          label={'View Live Site'}
          className="text-emerald-400"
        />
      )}
      {!!props.sourceCode && (
        <AnimatedLinkWithIcon
          link={props.sourceCode}
          label="View Source Code"
          iconUrl={CodeIcon}
          className="text-amber-400"
        />
      )}
    </div>
  );
};
