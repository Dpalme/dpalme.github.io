import { NavLink } from '#/shared/components/navlink';
import { PopInAnimation } from '#/shared/components/popIn';
import BackArrow from '#assets/icons/thin_big_left.min.svg';

export const OtherProjects = (props: {
  links: { link: string; label: string }[];
}) => {
  return (
    <div className="mt-12 flex w-full flex-col gap-2 font-alt">
      <PopInAnimation delay={0.8}>
        <h2 className="col-span-full font-sans text-sm">Other Projects</h2>
      </PopInAnimation>
      <div className="flex flex-col gap-8 uppercase md:justify-around md:gap-4">
        {props.links.map((link, i) => (
          <PopInAnimation
            delay={1}
            key={link.link}
          >
            <NavLink
              to={link.link}
              className={[
                i % 2
                  ? 'justify-end text-right font-title'
                  : 'justify-start text-left font-alt',
                'flex flex-row items-center gap-2',
              ].join(' ')}
            >
              <div className="text-sm">{link.label}</div>
              <img
                src={BackArrow}
                alt=""
                className={[
                  i % 2 == 0 ? 'order-first' : '-scale-x-100',
                  'block h-3 self-center',
                ].join(' ')}
              />
            </NavLink>
          </PopInAnimation>
        ))}
      </div>
    </div>
  );
};
