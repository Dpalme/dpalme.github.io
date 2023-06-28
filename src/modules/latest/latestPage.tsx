import { PopInAnimation } from '@/shared/components/popIn';
import { LastFmCard } from './components/lastFMCard';
import { LetterboxdCard } from './components/letterboxdCard';
import FeedComponent from './components/rssFeed';
import { GithubCard } from './components/githubCard';
import { VSCOCard } from './components/vscoCard';
import JSONFeedComponent from './components/jsonFeed';

export const LatestPage = () => {
  return (
    <section
      className="grid grid-cols-1 @lg:grid-cols-[max-content_1fr] gap-8
      items-start max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="flex flex-col gap-4 shrink">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
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
      <div className="@container flex flex-col gap-4">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
            Watching <span className="font-alt font-extrabold">Movies</span>
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
      <div className="@container flex flex-col gap-4">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
            Building <span className="font-alt font-extrabold">Stuff</span>
          </h2>
        </PopInAnimation>
        <div className="grid grid-cols-1 gap-2 items-stretch mb-4" role="list">
          <img
            src="http://ghchart.rshah.org/dpalme"
            alt="dpalme's Github chart"
          />
        </div>
      </div>
      <div className="@container flex flex-col gap-4">
        <PopInAnimation delay={0.5}>
          <h2 className="font-title font-thin m-0 text-base">
            Taking <span className="font-alt font-extrabold">Photos</span>
          </h2>
        </PopInAnimation>
        <div
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4
        gap-2 items-stretch mb-4"
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
