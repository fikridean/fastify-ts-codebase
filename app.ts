import dotenv from 'dotenv';
dotenv.config();
import checkEnvVariables from './config';

import Fastify, { FastifyInstance } from 'fastify'
import appRoutes from './src/routes/routes';
import dbConnector from './src/plugin/dbConnector';

// Start the server
const start = async () => {
  // Create Fastify instance
  let fastify: FastifyInstance;

  if (process.env.NODE_ENV === 'development') {
    fastify = Fastify({
      logger: {
        level: 'debug',
        formatters: {
          log(object) {
            return {
              msg: object.msg,
              responseTime: object.responseTime || 0,
            };
          },
          bindings() {
            return {}; // Removes default bindings like pid and hostname
          },
        },
        timestamp: false, // Disable default timestamp
      },
    });
  } else {
    fastify = Fastify({ logger: false });
  }

  try {
    // Check env variables are set
    checkEnvVariables();

    // Register MongoDB plugin
    fastify.register(dbConnector)

    // Register Routes
    fastify.register(appRoutes)

    // Define port config
    interface iPortConfig {
      port: number;
    }
    const portConfig: iPortConfig = {
      port: parseInt(process.env.PORT || '3000')
    }

    // Start the server
    await fastify.listen(portConfig)
    fastify.log.info(`Server listening on port ${portConfig.port}`)

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
