// src/routes/calculate.ts
import { FastifyInstance } from 'fastify';
import certificateRoute from './certificateRoute';

export default async function appRoutes(fastify: FastifyInstance) {
  // Register individual routes
  await fastify.register(certificateRoute);
}