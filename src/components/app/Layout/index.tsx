import { FC } from 'react';

import { Header } from '../';

type Props = {
  title?: string;
  color?: string;
};

export const Layout: FC<Props> = ({ title, color, children }) => {
  return (
    <div className="layout py-10 pl-14 relative">
      <Header />
      <main className="z-100">{children}</main>
    </div>
  );
};
