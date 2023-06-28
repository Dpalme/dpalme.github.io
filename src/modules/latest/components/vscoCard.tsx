import { RSSResponseItem } from '@/shared/hooks/useRSS';

export const VSCOCard = (props: RSSResponseItem) => {
  return (
    <a
      className="relative hover:scale-110 scale-100 block transition-transform hover:z-30"
      href={props.link}
      target="_blank"
      role="list-item"
    >
      <div className="w-full">
        <img
          srcSet={`${props.thumbnail}?w=260 1x,
          ${props.thumbnail}?w=260&dpr=2 2x,
          ${props.thumbnail}?w=260&dpr=3 3x`}
          src={props.thumbnail + '?w=260'}
          alt={props.title}
          className="bg-neutral-700 w-full outline-none
          border-transparent"
          loading="lazy"
        ></img>
        {props.loading && (
          <div
            className="absolute left-0 top-0 motion-safe:animate-pulse
          bg-neutral-700 w-full h-full"
          ></div>
        )}
      </div>
    </a>
  );
};
