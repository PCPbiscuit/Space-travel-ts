// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const planetInfo = [
  {
    name: 'moon',
    distance: '384,400 km',
    time: '3 days',
    info: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  },
  {
    name: 'mars',
    distance: '225 MIL. km',
    time: '9 months',
    info: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  },
  {
    name: 'europa',
    distance: '628 MIL. km',
    time: '3 years',
    info: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  },
  {
    name: 'titan',
    distance: '1.6 BIL. km',
    time: '7 years',
    info: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  },
];

type Planet = {
  name: string;
  distance: string;
  time: string;
  info: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Planet | undefined>,
) {
  const { planet } = req.query;
  const currentPlanetInfo = planetInfo.find(p => p.name == planet);
  res.status(200).json(currentPlanetInfo);
}
