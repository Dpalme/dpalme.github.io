import { RSSResponseItem } from '@/shared/hooks/useRSS';

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
      className="rounded-md overflow-hidden shadow-md relative"
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
          className="bg-neutral-700 aspect-[150/225] w-full outline-none border-transparent
        lg:grayscale lg:hover:grayscale-0 transition-all duration-700 z-10"
          loading="lazy"
        ></img>
        {props.loading && (
          <div
            className="absolute left-0 top-0 motion-safe:animate-pulse
          bg-neutral-700 w-full h-full"
          ></div>
        )}
      </div>
      <div className="backdrop-blur-lg bg-black bg-opacity-40 p-2">
        <span className="font-sans text-xs text-amber-500 m-0">{r8}&nbsp;</span>
        <h3 className="font-alt font-extrabold tracking-tight text-xs m-0 truncate">
          {filmTitle}&nbsp;
        </h3>
      </div>
    </a>
  );
};
