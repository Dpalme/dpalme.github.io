import { ReactNode } from 'react';

export const Container = (props: {
  children: ReactNode;
  className?: string;
  containerClass?: string;
}) => {
  return (
    <section
      className="fixed h-screen w-screen overflow-hidden"
    >
      <div className="h-screen min-h-full w-full max-w-full overflow-y-auto overflow-x-hidden overscroll-contain px-8 pb-16 pt-8 @container md:pb-4 md:pt-16">
        <div
          className={[
            'grid grid-cols-1 gap-32 pb-16 md:grid-cols-2 lg:grid-cols-[1fr_2fr]',
            'drop-shadow-sm',
            props.containerClass?.includes('items-')
              ? props.containerClass
              : ['md:items-center', props.containerClass].join(' '),
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
};
