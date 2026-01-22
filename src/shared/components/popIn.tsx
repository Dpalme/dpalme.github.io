import { ReactNode } from 'react';

export const PopInAnimation = (props: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return <div>{props.children}</div>;
};
