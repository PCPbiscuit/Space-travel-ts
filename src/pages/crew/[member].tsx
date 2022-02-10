import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { http } from 'src/utils';

type Member = {
  name: string;
  job: string;
  description: string;
};

type Props = {
  crew: Member[];
  member: Member;
};

export const getStaticProps: GetStaticProps = async context => {
  const member = await http.get(`/crew/${context.params?.member}`);
  const crew = await http.get(`/crew`);
  return {
    props: { crew, member },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await http.get('/crew');
  const paths = res.map((p: { id: number; name: string }) => ({
    params: { member: p.name },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

const Destination: NextPage<Props> = ({ crew, member }) => {
  return (
    <div className="flex flex-col px-28 pt-20 w-full space-y-16">CREW</div>
  );
};

export default Destination;
