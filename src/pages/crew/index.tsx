import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import cx from 'classnames';

import { Member, crewMembersInfo } from 'src/data';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { crew: crewMembersInfo },
  };
};

type Props = {
  crew: Member[];
};

const Crew: NextPage<Props> = ({ crew }) => {
  const [current, setCurrent] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleCurrent = (i: number) => {
    setCurrent(i);
  };
  return (
    <div className="flex flex-col px-28 pt-20 w-full">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">02</h2>
        <h2>Meet your crew</h2>
      </div>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col w-2/5 mt-40">
            <h3 className="text-white text-opacity-50 uppercase text-medium">
              {crew[current].job}
            </h3>
            <h1 className="mt-3 mb-7 text-big uppercase text-white">
              {crew[current].name}
            </h1>
            <p className="text-lg text-blue">{crew[current].description}</p>
          </div>

          <div className="flex space-x-6 mb-20">
            {crew.map((_c, index) => (
              <span
                className={cx(
                  'w-4 h-4 rounded-full bg-white opacity-[15%] hover:opacity-100 transition-opacity duration-300 cursor-pointer',
                  { 'opacity-100': current == index },
                )}
                onClick={() => handleCurrent(index)}
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className={cx(
            'w-2/5 absolute left-1/2 bottom-0 transition-all duration-500 h-full max-h-[70vh] transform translate-y-full',
            { '!translate-y-0': mounted },
          )}
        >
          <Image
            alt="Celestial object"
            src={crew[current].image}
            objectFit="contain"
            objectPosition="bottom"
            // width="568"
            // height="712"
            layout="fill"
            quality="100"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
