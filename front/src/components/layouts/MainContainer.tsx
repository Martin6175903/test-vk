import { ComponentProps, PropsWithChildren } from 'react';

interface MainContainerProps extends ComponentProps<'div'> {}

const MainContainer = ({
  children,
  className
}: PropsWithChildren<MainContainerProps>) => {
  return (
    <div className={`wrapper ${className ? className : ''}`}>{children}</div>
  );
};

export default MainContainer;
