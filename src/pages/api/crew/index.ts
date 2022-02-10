// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const crew = [
  { id: 1, name: 'commander' },
  { id: 2, name: 'specialist' },
  { id: 3, name: 'pilot' },
  { id: 4, name: 'engineer' },
];

type Member = {
  id: number;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Member[] | []>,
) {
  res.status(200).json(crew);
}
