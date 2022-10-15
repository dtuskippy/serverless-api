'use strict';

require('dynamoose');
const personModel = require('./personModel.js');

exports.handler = async (event) => {
  try {
    const peopleId = event.queryStringParameters && event.queryStringParameters.peopleId;
    let data;
    if (peopleId) {
      const list = await personModel.query('peopleId').eq(peopleId).exec();
      data = list[0];
    } else {
      data = await personModel.scan().exec();
      console.log('|||--Get all--|||', data);
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      response: error.message,
    };
  }
}











