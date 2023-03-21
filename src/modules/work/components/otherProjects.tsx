import { PopInAnimation } from '@/shared/components/popIn';
import { NavLink } from 'react-router-dom';
import BackArrow from '@/assets/thin_big_left.min.svg';

export const OtherProjects = (props: {
  links: { link: string; label: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2 font-alt w-full mt-12">
      <PopInAnimation delay={0.8}>
        <h2 className="col-span-full text-sm font-sans">Other Projects</h2>
      </PopInAnimation>
      <div className="flex flex-col md:justify-around gap-8 md:gap-4 uppercase">
        {props.links.map((link, i) => (
          <PopInAnimation delay={1} key={link.link}>
            <NavLink
              to={link.link}
              className={[
                i % 2
                  ? 'justify-end font-title text-right'
                  : 'justify-start text-left font-alt',
                'flex flex-row gap-2 items-center',
              ].join(' ')}
            >
              <div className='text-sm'>{link.label}</div>
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
