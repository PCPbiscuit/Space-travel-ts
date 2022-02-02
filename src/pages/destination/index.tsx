import type { NextPage } from 'next';

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/destination/moon',
      permanent: false,
    },
  };
}

const Destination: NextPage = () => {
  return null;
};

export default Destination;
