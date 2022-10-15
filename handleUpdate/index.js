'use strict';

require('dynamoose');
const personModel = require('./personModel.js');


exports.handler = async (event) => {
  try {
    const peopleId = event.queryStringParameters && event.queryStringParameters.peopleId;
    const { name, email } = JSON.parse(event.body);
    const data = await personModel.update({peopleId: peopleId},{ name: name, email: email });
    console.log('|||---Data update a success---|||', data);
    return {
      status: 200,
      response: 'Update a success',
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      status: 500,
      response: error.message,
    };
  }
};
