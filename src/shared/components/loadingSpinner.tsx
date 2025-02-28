export const LoadingSpinner = (props: { className?: string }) => {
  return (
    <div
      className={[
        'h-[1px] w-48 rounded-lg bg-neutral-300',
        'inline-block origin-center animate-squeeze delay-100',
        props.className,
      ].join(' ')}
    />
  );
};
