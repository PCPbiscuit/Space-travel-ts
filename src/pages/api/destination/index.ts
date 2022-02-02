// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const spaceObjects = [
  { id: 1, name: 'moon' },
  { id: 2, name: 'mars' },
  { id: 3, name: 'europa' },
  { id: 4, name: 'titan' },
];

type Planet = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Planet[] | []>,
) {
  res.status(200).json(spaceObjects);
}
