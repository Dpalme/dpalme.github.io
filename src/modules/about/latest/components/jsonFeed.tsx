import { PopInAnimation } from '#/shared/components/popIn';
import { useFetch } from '#/shared/hooks/useFetch';
import { createElement, FunctionComponent } from 'react';

function JSONFeedComponent(props: {
  url: string;
  cardComponent: FunctionComponent<any>;
}) {
  const { data, loading, error } = useFetch(props.url);

  return !!error ? (
    <p className="rounded-md bg-red-500 p-4 text-main">{error.toString()}</p>
  ) : (
    <>
      {data?.items?.map(
        (item, i) =>
          i < 12 &&
          createElement(props.cardComponent, {
            ...item,
            loading,
          }),
      )}
    </>
  );
}
export default JSONFeedComponent;
