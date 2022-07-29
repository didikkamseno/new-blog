import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc'
      }
    });
    const session = await getSession({ req });
    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        image: entry.image,
        email: session?.user?.email === entry.email ? entry.email : null,
        created_by: entry.created_by,
        updated_at: entry.updated_at
      }))
    );
  }

  const session = await getSession({ req });
  const { email, image, name } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email: email,
        image: image,
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      image: newEntry.image,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at
    });
  }

  return res.send('Method not allowed.');
}
