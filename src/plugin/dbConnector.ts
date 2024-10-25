import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';
import { ResponseMessage } from '../enums/responseMessage.enum';

async function dbConnector(fastify: FastifyInstance) {
  fastify.register(fastifyMongo, {
    url: process.env.MONGO_URI
  });

  // Wait until the plugin is ready
  fastify.after(() => {
    // Make the animal collection available as a property on fastify
    if (fastify.mongo && fastify.mongo.db) {
      fastify.decorate('certificationCollection', fastify.mongo.db.collection('certifications'));
    } else {
      throw new Error(`${ResponseMessage.DATABASE_ERROR.message}`);
    }
  });
}

export default fastifyPlugin(dbConnector)
