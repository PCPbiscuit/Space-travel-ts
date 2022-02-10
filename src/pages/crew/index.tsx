import type { NextPage } from 'next';

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/crew/commander',
      permanent: false,
    },
  };
}

const Crew: NextPage = () => {
  return null;
};

export default Crew;
