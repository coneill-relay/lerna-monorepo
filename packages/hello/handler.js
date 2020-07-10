'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'New Package v1.1! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
