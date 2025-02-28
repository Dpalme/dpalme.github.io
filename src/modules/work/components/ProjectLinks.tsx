import { PopInAnimation } from '#/shared/components/popIn';
import LinkIcon from '#assets/icons/link.min.svg';
import CodeIcon from '#assets/icons/code-alt.min.svg';

const AnimatedLinkWithIcon = (props: {
  iconUrl: string;
  link: string;
  label: string;
  className?: string;
}) => {
  return (
    <PopInAnimation
      delay={0.5}
      className="w-full grow"
    >
      <a
        href={props.link}
        className="group flex w-auto shrink flex-col
              items-start justify-start gap-2 font-alt font-normal
              uppercase italic
              text-transparent hover:text-inherit"
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
            'inline-block truncate opacity-0 group-hover:opacity-100',
            'w-0 origin-top scale-0 group-hover:w-fit',
            'transition-all group-hover:scale-100',
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
    <div className="flex flex-row items-center gap-4">
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
