import type { NextPage, GetStaticProps } from 'next';

import { technology } from 'src/data';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { technology },
  };
};

type Technology = {
  title: string;
  info: string;
};

type Props = {
  technology: Technology[];
};

const Technology: NextPage<Props> = () => {
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">03</h2>
        <h2>space launch 101</h2>
      </div>
    </div>
  );
};

export default Technology;
