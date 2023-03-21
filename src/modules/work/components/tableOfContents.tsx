import { PopInAnimation } from '@/shared/components/popIn';

const smoothScrollToElement = (elementId: string) => (ev: React.MouseEvent) => {
  ev.preventDefault();
  var element = document.getElementById(elementId);
  if (!element) return;

  document.querySelector('.\\@container')?.scrollBy({
    top: element.getBoundingClientRect().top - 64,
    behavior: 'smooth',
  });
};

export const TableOfContents = () => {
  return (
    <div
      className="flex-col gap-4 grayscale brightness-100 items-start
  lg:sticky lg:top-0 flex"
    >
      <PopInAnimation delay={0.55}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('overview')}
        >
          Overview
        </a>
      </PopInAnimation>
      <PopInAnimation delay={0.6}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('design-philosophy')}
        >
          Design Philosophy
        </a>
      </PopInAnimation>
      <PopInAnimation delay={0.65}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('client-references')}
        >
          Client References
        </a>
      </PopInAnimation>
      <PopInAnimation delay={0.7}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('the-design')}
        >
          The Design
        </a>
      </PopInAnimation>
      <PopInAnimation delay={0.75}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('technical-details')}
        >
          Technical Details
        </a>
      </PopInAnimation>
      <PopInAnimation delay={0.8}>
        <a
          className="cursor-pointer"
          onClick={smoothScrollToElement('project-achievements')}
        >
          Project Achievements
        </a>
      </PopInAnimation>
    </div>
  );
};
