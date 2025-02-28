import { RSSResponseItem } from '#/shared/hooks/useRSS';

export const LetterboxdCard = (props: RSSResponseItem) => {
  let imageUrl, film, rating, filmTitle, r8, link;
  if (!props.loading) {
    imageUrl = props.content?.match(/src="(.+)">/gi)?.[0].slice(5, -2);
    link = props.link?.replace('/diegopb', '').split('/').slice(0, 5).join('/');
    [film, rating] = props.title?.split(' - ');
    [filmTitle] = film?.split(', ');
    r8 = rating?.split('(')[0];
  }
  return (
    <a
      className="relative overflow-hidden rounded-md shadow-md"
      href={link}
      target="_blank"
      role="list-item"
    >
      <div className="aspect-[150/225] w-full">
        <img
          src={
            imageUrl ||
            'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
          alt={props.title}
          className="z-10 aspect-[150/225] w-full border-transparent bg-neutral-700
        outline-none transition-all duration-700 lg:grayscale lg:hover:grayscale-0"
          loading="lazy"
        ></img>
        {props.loading && (
          <div
            className="absolute left-0 top-0 h-full
          w-full bg-neutral-700 motion-safe:animate-pulse"
          ></div>
        )}
      </div>
      <div className="bg-black bg-opacity-40 p-2 backdrop-blur-lg">
        <span className="m-0 font-sans text-xs text-amber-500">{r8}&nbsp;</span>
        <h3 className="m-0 truncate font-alt text-xs font-extrabold tracking-tight">
          {filmTitle}&nbsp;
        </h3>
      </div>
    </a>
  );
};
