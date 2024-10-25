import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  return await fastify.certificationCollection.find().toArray();
}