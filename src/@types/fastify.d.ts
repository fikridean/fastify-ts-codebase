import 'fastify';
import Certification from './certification';

declare module 'fastify' {
  interface FastifyInstance {
    certificationCollection: Certification;
  }
}