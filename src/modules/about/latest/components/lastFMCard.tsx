import { HandleAsync } from '#/shared/components/handleAsync';
import { RSSResponseItem } from '#/shared/hooks/useRSS';
import { timeDifference } from '../utils/timeDiffrence';

export const LastFmCard = (props: RSSResponseItem) => {
  const val = props.title?.split('-');
  let artist, song, daysAgo, hoursAgo, minutesAgo;
  if (!!val) {
    [artist, song] = val;
  }
  if (props.pubDate) {
    const pubDate = props.pubDate.replaceAll(' ', 'T') + 'Z';
    const { daysDifference, hoursDifference, minutesDifference } =
      timeDifference(new Date(), new Date(pubDate));
    daysAgo = daysDifference;
    hoursAgo = hoursDifference;
    minutesAgo = minutesDifference;
  }
  return (
    <HandleAsync
      loading={props.loading}
      fallback={
        <div className="flex flex-row gap-2">
          <div className="inline-block h-6 w-6  animate-pulse rounded-full bg-neutral-400">
            &nbsp;
          </div>
          <div className="inline-block h-6 w-32 animate-pulse rounded-full bg-neutral-400">
            &nbsp;
          </div>
          <div className="inline-block h-6 w-12 animate-pulse rounded-full bg-neutral-400">
            &nbsp;
          </div>
        </div>
      }
    >
      <a
        href={props.link}
        target="_blank"
        role="list-item"
        className="inline-block w-fit"
      >
        <h3 className="inline font-title text-xs font-light italic">
          <span className="mr-2 font-alt font-extrabold not-italic text-neutral-400">
            {props.pubDate
              ? !!daysAgo
                ? `${daysAgo}d`
                : !!hoursAgo
                  ? `${hoursAgo}h`
                  : `${minutesAgo}m`
              : '?'}
          </span>{' '}
          {song}{' '}
          <span className="ml-2 font-alt text-xs font-extrabold not-italic">
            {artist}
          </span>
        </h3>
      </a>
    </HandleAsync>
  );
};
