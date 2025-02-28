import { LoadingSpinner } from './loadingSpinner';

export const LoadingBackdrop = () => {
  return (
    <div
      className="fixed z-10 flex h-full w-full flex-col
      items-center justify-center gap-6 text-main"
    >
      <p className="pb-2 text-6xl">
        Dieg
        <span className="spin" />
      </p>
      <p className="pb-2 text-6xl">Palmerín</p>
    </div>
  );
};
