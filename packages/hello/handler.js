'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
