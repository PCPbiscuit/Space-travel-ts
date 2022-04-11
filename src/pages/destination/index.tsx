import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Destination: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/destination/moon');
  });
  return null;
};

export default Destination;
