import { ReactNode } from 'react';
import { m } from 'framer-motion';
import { ResponsiveBackground } from './responsiveBackground';

export const Container = (props: {
  children: ReactNode;
  className?: string;
  backgroundImage: { smSrc: string; mdSrc: string; xlSrc: string };
  containerClass?: string;
  nextPage?: string;
}) => {
  return (
    <m.section
      layoutScroll
      layout
      initial={{
        opacity: 0,
        x: '100%',
        zIndex: 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        zIndex: 0,
      }}
      exit={{
        opacity: 0,
        zIndex: 0,
      }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-screen h-screen overflow-hidden fixed"
    >
      <ResponsiveBackground
        smSrc={props.backgroundImage?.smSrc}
        mdSrc={props.backgroundImage?.mdSrc}
        xlSrc={props.backgroundImage?.xlSrc}
        className={props.className}
      />
      <div
        className="pl-12 pt-8 pb-16 md:pb-4 md:pt-16 pr-4 h-screen overflow-y-auto
      w-full max-w-full overflow-x-hidden min-h-full overscroll-contain @container"
      >
        <div
          className={[
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-32 pb-16',
            'drop-shadow-sm',
            props.containerClass?.includes('items-')
              ? props.containerClass
              : ['md:items-center', props.containerClass].join(' '),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </m.section>
  );
};
