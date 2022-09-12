/* eslint-disable import/no-anonymous-default-export */
import { getUser } from 'lib/twitter'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const response = await getUser('kapiljch')
  const { data } = response

  if (!response) {
    const user = null

    return res.status(200).json({ user })
  }

  const user = {
    ...data,
  }

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ user })
}
