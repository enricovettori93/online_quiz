// Generic exceptions
const MISSING_PARAMETERS = {
    message: 'missing parameters',
    code: 400,
    show: true,
  };
  
  const UNAUTHORIZED = {
    message: 'You\'re not authorized',
    code: 401,
    show: true,
  };
  
  const SERVER_ERROR = {
    message: 'Oh *CENSORED*, something\'s broken in our wonderful server',
    code: 500,
    show: true,
  };
  
  const UPLOAD_SERVER_ERROR = {
    message: 'File upload failed',
    code: 500,
    show: true,
  };
  
  const EWS_ERROR = {
    message: 'Oh *CENSORED*, something\'s broken in our wonderful EWS server',
    code: 500,
    show: true,
  };
  
  const BAD_REQUEST = {
    message: 'Bad request',
    code: 400,
    show: true,
  };
  
  const FORBIDDEN_ACTION = {
    message: 'Forbidden action',
    code: 403,
    show: true,
  };
  
  const BAD_REQUEST_VALIDATION = {
    message: 'Validation Error',
    code: 400,
    show: true,
  };
  
  const UNSUPPORTED_MEDIA_TYPE = {
    message: 'File type not supported',
    code: 415,
    show: true,
  };
  
  const REQUEST_ENTITY_TOO_LARGE = {
    message: 'Exceeded filesize limit',
    code: 413,
    show: true,
  };
  
  function missingParameter(param) {
    return {
      message: `Missing ${param} parameter`,
      code: 400,
      show: true,
    };
  }
  
  function invalidParameter(param) {
    return {
      message: `Not a valid parameter: ${param}`,
      code: 400,
      show: true,
    };
  }
  
  // Custom Exceptions
  const MAIL_NOT_VALID = {
    message: 'Invalid mail format',
    code: 400,
    show: true,
  };
  
  const COMMAND_EXEC_ERROR = {
    message: 'Command line error',
    code: 500,
    show: false,
  };
  
  function entityNotFound(entity) {
    return {
      message: entity ? `${entity} not found.` : 'Resource not found.',
      code: 404,
      show: false,
    };
  }
  
  module.exports = {
    MISSING_PARAMETERS,
    UNAUTHORIZED,
    SERVER_ERROR,
    UPLOAD_SERVER_ERROR,
    EWS_ERROR,
    BAD_REQUEST,
    FORBIDDEN_ACTION,
    BAD_REQUEST_VALIDATION,
    UNSUPPORTED_MEDIA_TYPE,
    REQUEST_ENTITY_TOO_LARGE,
    MAIL_NOT_VALID,
    COMMAND_EXEC_ERROR,
    missingParameter,
    invalidParameter,
    entityNotFound,
  };
  