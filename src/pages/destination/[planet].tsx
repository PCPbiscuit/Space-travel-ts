import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { http } from 'src/utils';
import mars from 'public/mars.png';
import moon from 'public/moon.png';
import europa from 'public/europa.png';
import titan from 'public/titan.png';

type Planet = {
  name: string;
  distance: string;
  time: string;
  info: string;
};

type Props = {
  planet: Planet;
  planets: Planet[];
};

const planetsPics = [
  { name: 'moon', value: moon },
  { name: 'mars', value: mars },
  { name: 'europa', value: europa },
  { name: 'titan', value: titan },
];

export const getStaticProps: GetStaticProps = async context => {
  const planet = await http.get(`/destination/${context.params?.planet}`);
  const planets = await http.get(`/destination`);
  return {
    props: { planet, planets },
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
  const image = planetsPics.find(p => p.name == props.planet.name)?.value;
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">01</h2>
        <h2>Pick your destination</h2>
      </div>
      <div className="flex items-center pl-16">
        <Image alt="Celestial object" src={image || ''} />
      </div>
    </div>
  );
};

export default Destination;
