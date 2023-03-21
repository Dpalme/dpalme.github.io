import { ReactNode, useEffect } from 'react';
import { Container } from '@/shared/components/container';
import { Outlet } from 'react-router-dom';

export const WorkPageTemplate = (props: {
  children?: ReactNode;
  className?: string;
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--main', '241 241 241');
  }, []);
  
  return (
    <Container
      className="detail-bg"
      containerClass={[
        'gap-8 md:gap-16 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_max-content_2fr] w-full',
        props.className,
      ].join(' ')}
    >
      {props.children}
      <Outlet />
    </Container>
  );
};
