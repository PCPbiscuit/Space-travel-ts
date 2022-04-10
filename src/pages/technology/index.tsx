import type { NextPage, GetStaticProps } from 'next';
import { http } from 'src/utils';

export const getStaticProps: GetStaticProps = async () => {
  const technology = await http.get(`/technology`);
  return {
    props: { technology },
  };
};

type Technology = {
  name: string;
  job: string;
  description: string;
};

type Props = {
  technology: Technology[];
};

const Technology: NextPage<Props> = ({ technology }) => {
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
