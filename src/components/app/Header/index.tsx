import Link from 'next/link';
import LogoIcon from './logo.svg';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'destination', href: '/destination' },
  { name: 'crew', href: '/crew' },
  { name: 'technology', href: '/technology' },
];

export const Header = () => {
  return (
    <header className="flex items-center ify-cjustenter w-full h-24">
      <div className="w-12 h-12 bg-white rounded-full">
        <LogoIcon />
      </div>
      <div>line</div>
      <div className="h-full flex items-center bg-white bg-opacity-5 backdrop-blur-sm space-x-12 uppercase">
        {navLinks.map((link, index) => (
          <Link href={link.href} key={link.name}>
            <a className="space-x-3 flex items-center text-white tracking-widest hover:text-red-500">
              <b>{'0' + index}</b>
              <p>{link.name}</p>
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};
