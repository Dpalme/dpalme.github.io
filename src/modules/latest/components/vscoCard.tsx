import { RSSResponseItem } from '@/shared/hooks/useRSS';
import { timeDifference } from '../utils/timeDiffrence';

export const VSCOCard = (props: RSSResponseItem) => {
  const { daysDifference } = timeDifference(
    new Date(),
    new Date(parseInt(props.pubDate))
  );
  console.log(props);

  return (
    <a
      className="rounded-md overflow-hidden shadow-md relative"
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
          border-transparent transition-all duration-700 z-10"
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
        <h3 className="tracking-tight text-xs m-0 truncate">
          {daysDifference}d&nbsp;
        </h3>
      </div>
    </a>
  );
};
