import { RSSResponseItem } from '#/shared/hooks/useRSS';

export const VSCOCard = (props: RSSResponseItem) => {
  return (
    <a
      className="relative block scale-100 transition-transform hover:z-30 hover:scale-110"
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
          className="w-full border-transparent bg-neutral-700
          outline-none"
          loading="lazy"
        ></img>
        {props.loading && (
          <div
            className="absolute left-0 top-0 h-full
          w-full bg-neutral-700 motion-safe:animate-pulse"
          ></div>
        )}
      </div>
    </a>
  );
};
