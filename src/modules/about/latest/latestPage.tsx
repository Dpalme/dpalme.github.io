import { PopInAnimation } from '#/shared/components/popIn';
import { LastFmCard } from './components/lastFMCard';
import { LetterboxdCard } from './components/letterboxdCard';
import FeedComponent from './components/rssFeed';
import { VSCOCard } from './components/vscoCard';
import JSONFeedComponent from './components/jsonFeed';

export const LatestPage = () => {
  return (
    <section
      className="grid max-h-full grid-cols-1 items-start
      gap-8 overflow-y-auto overflow-x-hidden @xl:grid-cols-[minmax(max-content,2fr)_1fr]"
    >
      <div className="flex shrink flex-col gap-4">
        <PopInAnimation delay={0.5}>
          <h2 className="m-0 font-title text-base font-thin">
            Listening to <span className="font-alt font-extrabold">Music</span>
          </h2>
        </PopInAnimation>
        <div className="flex flex-col gap-2">
          <FeedComponent
            url="https://lfm.xiffy.nl/dpalme"
            cardComponent={LastFmCard}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 @container">
        <PopInAnimation delay={0.5}>
          <h2 className="m-0 font-title text-base font-thin">
            Watching <span className="font-alt font-extrabold">Movies</span>
          </h2>
        </PopInAnimation>
        <div
          className="mb-4 grid grid-cols-1 items-stretch
            gap-4 @2xs:grid-cols-2 @md:grid-cols-3 @xl:grid-cols-6"
          role="list"
        >
          <FeedComponent
            url="https://letterboxd.com/diegopb/rss/"
            cardComponent={LetterboxdCard}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 @container">
        <PopInAnimation delay={0.5}>
          <h2 className="m-0 font-title text-base font-thin">
            Building <span className="font-alt font-extrabold">Stuff</span>
          </h2>
        </PopInAnimation>
        <div
          className="mb-4 grid grid-cols-1 items-stretch gap-2"
          role="list"
        >
          <img
            src="http://ghchart.rshah.org/dpalme"
            alt="dpalme's Github chart"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-visible @container">
        <PopInAnimation delay={0.5}>
          <h2 className="m-0 font-title text-base font-thin">
            Taking <span className="font-alt font-extrabold">Photos</span>
          </h2>
        </PopInAnimation>
        <div
          className="mb-4 grid grid-cols-2 items-stretch
        @md:grid-cols-3 @xl:grid-cols-4"
          role="list"
        >
          <JSONFeedComponent
            url="https://vsco-to-rss.glitch.me/json/vsco/diego-pb"
            cardComponent={VSCOCard}
          />
        </div>
      </div>
    </section>
  );
};
