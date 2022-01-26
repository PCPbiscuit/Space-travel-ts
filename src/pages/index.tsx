import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex pl-28 pb-28 self-end">
      <div className="flex flex-col space-y-6">
        <h2 className="text-blue text-semi tracking-widest">
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className="text-largest text-white">SPACE</h1>
        <p className="text-blue text-lg whitespace-pre-line">
          {` Let’s face it; if you want to go to space, you might as well 
         genuinely go to outer space and not hover kind of on the 
         edge of it. Well sit back, and relax because we’ll give you a 
         truly out of this world experience!`}
        </p>
      </div>
    </div>
  );
};

export default Home;
