import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';

import { http } from 'src/utils';
import mars from 'public/mars.png';
import moon from 'public/moon.png';
import europa from 'public/europa.png';
import titan from 'public/titan.png';

type Celestial = {
  name: string;
  distance: string;
  time: string;
  info: string;
};

type Props = {
  celestial: Celestial;
  celestials: Celestial[];
};

const celestialsPics = [
  { name: 'moon', value: moon },
  { name: 'mars', value: mars },
  { name: 'europa', value: europa },
  { name: 'titan', value: titan },
];

export const getStaticProps: GetStaticProps = async context => {
  const celestial = await http.get(`/destination/${context.params?.planet}`);
  const celestials = await http.get(`/destination`);
  return {
    props: { celestial, celestials },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await http.get('/destination');
  const paths = res.map((p: { id: number; name: string }) => ({
    params: { planet: p.name },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

const Destination: NextPage<Props> = props => {
  const image = celestialsPics.find(p => p.name == props.celestial.name)?.value;
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">01</h2>
        <h2>Pick your destination</h2>
      </div>
      <div className="flex items-center pl-16 justify-between">
        <Image alt="Celestial object" src={image || ''} />
        <div className="flex flex-col h-full">
          <div className="flex space-x-9 text-white text-lg uppercase">
            {celestialsPics.map(celestial => (
              <Link
                href={`/destination/${celestial.name}`}
                key={celestial.name}
              >
                <a
                  className={cx(
                    'py-4 hover:border-white/50 transition-colors duration-200 border-b-[3px] border-transparent tracking-widest cursor-pointer',
                    props.celestial.name == celestial.name
                      ? 'border-white'
                      : 'border-transparent',
                  )}
                >
                  {celestial.name}
                </a>
              </Link>
            ))}
          </div>
          <h2>{props.celestial.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Destination;
