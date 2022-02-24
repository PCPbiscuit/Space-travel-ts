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
  console.log(crew);
  return <div></div>;
};

export default Crew;
