import { PopInAnimation } from '@/shared/components/popIn';
import { LastFmCard } from './components/lastFMCard';
import { LetterboxdCard } from './components/letterboxdCard';
import FeedComponent from './components/rssFeed';

export const LatestPage = () => {
  return (
    <section
      className="grid grid-cols-1 @lg:grid-cols-[max-content_1fr] gap-8
      items-start max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 shrink">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
            Latest <span className="font-alt font-extrabold">Songs</span>
          </h2>
        </PopInAnimation>
        <div className="flex flex-col gap-2">
          <FeedComponent
            url="https://lfm.xiffy.nl/dpalme"
            cardComponent={LastFmCard}
          />
        </div>
      </div>
      <div className="@container flex flex-col gap-4">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
            Latest <span className="font-alt font-extrabold">Movies</span>
          </h2>
        </PopInAnimation>
        <div
          className="grid grid-cols-1 @2xs:grid-cols-2 @md:grid-cols-3
            @xl:grid-cols-6 gap-4 items-stretch mb-4"
          role="list"
        >
          <FeedComponent
            url="https://letterboxd.com/diegopb/rss/"
            cardComponent={LetterboxdCard}
          />
        </div>
      </div>
    </section>
  );
};
