import { FC } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { Header } from '../';

type Props = {
  title?: string;
  color?: string;
};

export const Layout: FC<Props> = ({ title, color, children }) => {
  const { pathname } = useRouter();
  const page = pathname.split('/')[1];
  return (
    <div className={cx('layout py-10 pl-14 relative', page)}>
      <Header />
      <main className="flex">{children}</main>
    </div>
  );
};
