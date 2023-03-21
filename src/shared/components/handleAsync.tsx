import { LoadingSpinner } from './loadingSpinner';

export const HandleAsync = (props: {
  children: JSX.Element;
  loading: boolean | undefined;
  fallback?: JSX.Element;
}) => {
  return props.loading ? (
    !!props.fallback ? (
      props.fallback
    ) : (
      <LoadingSpinner />
    )
  ) : (
    props.children
  );
};
