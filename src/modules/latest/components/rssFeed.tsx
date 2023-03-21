import { PopInAnimation } from '@/shared/components/popIn';
import { useRSS } from '@shared/hooks/useRSS';
import { createElement, FunctionComponent } from 'react';

function FeedComponent(props: {
  url: string;
  cardComponent: FunctionComponent<any>;
}) {
  const { data, loading, error } = useRSS(props.url);

  return !!error ? (
    <p className="bg-red-500 text-main rounded-md p-4">{error.toString()}</p>
  ) : (
    <>
      {[0, 1, 2, 3, 4, 5].map((n, i) => (
        <PopInAnimation delay={0.3 + i / 10} key={`${props.url}:${n}`}>
          {createElement(props.cardComponent, {
            ...data?.items[n],
            loading,
          })}
        </PopInAnimation>
      ))}
    </>
  );
}
export default FeedComponent;
