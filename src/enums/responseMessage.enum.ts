export const ResponseMessage = {
  SUCCESS: {
    code: 200,
    message: "Request was successful",
  },
  CREATED: {
    code: 201,
    message: "Resource has been created",
  },
  NO_CONTENT: {
    code: 204,
    message: "No content to return",
  },
  BAD_REQUEST: {
    code: 400,
    message: "Bad request",
  },
  UNAUTHORIZED: {
    code: 401,
    message: "Unauthorized access",
  },
  FORBIDDEN: {
    code: 403,
    message: "Forbidden",
  },
  NOT_FOUND: {
    code: 404,
    message: "Resource not found",
  },
  ENV_NOT_FOUND: {
    code: 500,
    message: "Environment variable not found",
  },
  VALIDATION_ERROR: {
    code: 422,
    message: "Validation error occurred",
  },
  CONFLICT: {
    code: 409,
    message: "Conflict: resource already exists",
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: "Internal server error",
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    message: "Service is currently unavailable",
  },
  TIMEOUT: {
    code: 504,
    message: "Request timed out",
  },
  DATABASE_ERROR: {
    code: 500,
    message: "Database error occurred. Failed to connect to database",
  },
};