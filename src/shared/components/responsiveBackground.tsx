import Grain from '#/grain';

export const ResponsiveBackground = (props: {
  xlSrc: string;
  mdSrc: string;
  smSrc: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className={[
          'stylized-bg fixed left-0 top-0 -z-20 h-full w-full',
          props.className,
        ].join(' ')}
        style={
          {
            '--sm-img': `url(${props.smSrc})`,
            '--md-img': `url(${props.mdSrc})`,
            '--xl-img': `url(${props.xlSrc})`,
          } as React.CSSProperties
        }
      ></div>
    </>
  );
};
