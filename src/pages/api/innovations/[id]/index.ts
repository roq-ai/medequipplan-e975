import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { innovationValidationSchema } from 'validationSchema/innovations';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.innovation
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getInnovationById();
    case 'PUT':
      return updateInnovationById();
    case 'DELETE':
      return deleteInnovationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInnovationById() {
    const data = await prisma.innovation.findFirst(convertQueryToPrismaUtil(req.query, 'innovation'));
    return res.status(200).json(data);
  }

  async function updateInnovationById() {
    await innovationValidationSchema.validate(req.body);
    const data = await prisma.innovation.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteInnovationById() {
    const data = await prisma.innovation.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
