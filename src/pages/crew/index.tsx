import type { NextPage, GetStaticProps } from 'next';
import { http } from 'src/utils';

export const getStaticProps: GetStaticProps = async () => {
  const crew = await http.get(`/crew`);
  return {
    props: { crew },
  };
};

type Member = {
  name: string;
  job: string;
  description: string;
};

type Props = {
  crew: Member[];
};

const Crew: NextPage<Props> = ({ crew }) => {
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">01</h2>
        <h2>Meet your crew</h2>
      </div>
    </div>
  );
};

export default Crew;
