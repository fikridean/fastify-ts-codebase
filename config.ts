import { ResponseMessage } from "./src/enums/responseMessage.enum"

const checkEnvVariables = () => {
  // Define the environment variables that must be set
  const envVariables = [
    'NODE_ENV',
    'PORT',
    'MONGO_URI',
  ]

  // Check if all the environment variables are set
  const envNotExist = []

  for (const envVariable of envVariables) {
    if (!process.env[envVariable]) {
      envNotExist.push(envVariable)
    }
  }

  // If any environment variables are not set, log an error and exit the process
  if (envNotExist.length > 0) {
    throw new Error(`${ResponseMessage.ENV_NOT_FOUND.message}: ${envNotExist.join(', ')}`)
  }
}

export default checkEnvVariables;