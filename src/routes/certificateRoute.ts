import { FastifyInstance } from 'fastify';
import { logDebug } from '../utils/logger';
import getCertificates from '../services/certificateService';

export default async function certificateRoute(fastify: FastifyInstance) {
  fastify.get('/certificates', async (req, res) => {
    try {
      const certificates = await getCertificates(fastify);
      res.send({ certificates });
    } catch (err) {
      fastify.log.error(err);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });

  fastify.post('/certificates', async (req, res) => {
    logDebug(fastify.log, 'Handling /certificates POST route');
    res.send({ certificate: {} });
  });
}