import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import LogoIcon from './logo.svg';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'destination', href: '/destination' },
  { name: 'crew', href: '/crew' },
  { name: 'technology', href: '/technology' },
];

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex items-center ify-cjustenter w-full h-24 justify-between">
      <div className="w-12 h-12 bg-white rounded-full mr-16 ">
        <LogoIcon />
      </div>
      <div className="h-full flex items-center bg-white bg-opacity-5 backdrop-blur-sm space-x-12 uppercase px-32 links">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={link.name}>
            <a
              className={cx(
                'space-x-3 flex items-center text-white tracking-[0.16875em] h-full border-b-[3px] border-transparent hover:border-white transition-colors duration-200',
                link.href == pathname && 'border-white',
              )}
            >
              <p className="font-bold">{'0' + index}</p>
              <p>{link.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};
