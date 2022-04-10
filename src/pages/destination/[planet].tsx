import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';

import { http } from 'src/utils';

type Celestial = {
  name: string;
  distance: string;
  time: string;
  info: string;
  image: string;
};

type Props = {
  celestial: Celestial;
  celestials: Celestial[];
};

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

const Destination: NextPage<Props> = ({ celestial, celestials }) => {
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">01</h2>
        <h2>Pick your destination</h2>
      </div>
      <div className="flex items-center pl-16 space-x-28 2xl:space-x-56">
        <div className="w-1/2">
          <Image
            alt="Celestial object"
            src={celestial.image}
            objectFit="contain"
            width="445"
            height="445"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col h-full mb-12 w-1/2 2xl:w-1/3">
          <div className="flex space-x-9 text-white text-base uppercase">
            {celestials.map(cel => (
              <Link href={`/destination/${cel.name}`} key={cel.name}>
                <a
                  className={cx(
                    'py-4 hover:border-white/50 transition-colors duration-200 border-b-[3px] border-transparent tracking-widest cursor-pointer',
                    celestial.name == cel.name
                      ? 'border-white'
                      : 'border-transparent',
                  )}
                >
                  {cel.name}
                </a>
              </Link>
            ))}
          </div>
          <h1 className="text-white text-large uppercase">{celestial.name}</h1>
          <p className="text-blue text-lg">{celestial.info}</p>
          <div className="w-full h-px bg-darkish mt-14 mb-7" />
          <div className="flex items-center space-x-20 uppercase">
            <div className="flex flex-col space-y-3">
              <p className="text-blue tracking-widest text-sm">avg. distance</p>
              <span className="text-white text-semi">{celestial.distance}</span>
            </div>
            <div className="flex flex-col space-y-3">
              <p className="text-blue tracking-widest text-sm">
                est. travel time
              </p>
              <span className="text-white text-semi">{celestial.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
