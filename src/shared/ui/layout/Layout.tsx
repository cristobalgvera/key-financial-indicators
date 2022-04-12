import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div data-testid="layout">{children}</div>;
};
