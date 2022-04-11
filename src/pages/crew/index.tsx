import type { NextPage, GetStaticProps } from 'next';

import { Member, crewMembersInfo } from 'src/data';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { crew: crewMembersInfo },
  };
};

type Props = {
  crew: Member[];
};

const Crew: NextPage<Props> = () => {
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">
      <div className="flex space-x-7 items-center text-semi text-white tracking-widest uppercase">
        <h2 className="opacity-25 font-bold">02</h2>
        <h2>Meet your crew</h2>
      </div>
    </div>
  );
};

export default Crew;
