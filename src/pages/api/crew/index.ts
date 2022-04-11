// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const crewMembersInfo = [
  {
    job: 'commander',
    name: 'Douglas Hurley',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    id: 1,
    image: '/douglas-hurley.png',
  },
  {
    job: 'pilot',
    name: 'Mark Shuttleworth',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    id: 2,
    image: '/mark-shuttleworth.png',
  },
  {
    job: 'specialist',
    name: 'Victor Glover',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    id: 3,
    image: '/victor-glover.png',
  },
  {
    job: 'engineer',
    name: 'Anousheh Ansari',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    id: 4,
    image: '/anousheh-ansari.png',
  },
];

type Member = {
  id: number;
  name: string;
  description: string;
  job: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Member[] | []>,
) {
  res.status(200).json(crewMembersInfo);
}
