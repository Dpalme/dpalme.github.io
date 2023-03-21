import { HandleAsync } from '@/shared/components/handleAsync';
import { RSSResponseItem } from '@/shared/hooks/useRSS';

function timeDifference(date1: Date, date2: Date) {
  var difference = date1.getTime() - date2.getTime();

  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);

  return { daysDifference, hoursDifference, minutesDifference };
}

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
          <div className="w-6 h-6 bg-neutral-400  animate-pulse rounded-full inline-block">
            &nbsp;
          </div>
          <div className="w-32 h-6 bg-neutral-400 animate-pulse rounded-full inline-block">
            &nbsp;
          </div>
          <div className="w-12 h-6 bg-neutral-400 animate-pulse rounded-full inline-block">
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
        <h3 className="text-xs font-title font-light italic inline">
          <span className="font-alt font-extrabold mr-2 text-neutral-400 not-italic">
            {props.pubDate
              ? !!daysAgo
                ? `${daysAgo}d`
                : !!hoursAgo
                ? `${hoursAgo}h`
                : `${minutesAgo}m`
              : '?'}
          </span>{' '}
          {song}{' '}
          <span className="font-alt font-extrabold ml-2 text-xs not-italic">
            {artist}
          </span>
        </h3>
      </a>
    </HandleAsync>
  );
};
