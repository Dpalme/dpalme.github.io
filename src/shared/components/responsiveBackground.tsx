export const ResponsiveBackground = (props: {
  xlSrc: string;
  mdSrc: string;
  smSrc: string;
  className?: string;
}) => {
  return (
    <>
      <div
        className="h-full w-full fixed top-0 left-0 -z-20 stylized-bg"
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
