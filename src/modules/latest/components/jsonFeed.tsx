import { PopInAnimation } from '@/shared/components/popIn';
import { useFetch } from '@/shared/hooks/useFetch';
import { createElement, FunctionComponent } from 'react';

function JSONFeedComponent(props: {
  url: string;
  cardComponent: FunctionComponent<any>;
}) {
  const { data, loading, error } = useFetch(props.url);

  return !!error ? (
    <p className="bg-red-500 text-main rounded-md p-4">{error.toString()}</p>
  ) : (
    <>
      {data?.items?.map((item, i) => (
        <PopInAnimation delay={0.3 + i / 10} key={`${props.url}:${i}`}>
          {createElement(props.cardComponent, {
            ...item,
            loading,
          })}
        </PopInAnimation>
      ))}
    </>
  );
}
export default JSONFeedComponent;
