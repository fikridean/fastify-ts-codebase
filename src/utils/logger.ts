// src/utils/logger.ts
import { FastifyBaseLogger } from 'fastify';

export const logDebug = (logger: FastifyBaseLogger, message: string) => {
  if (process.env.NODE_ENV === 'development') {
    logger.debug(message);
  }
};