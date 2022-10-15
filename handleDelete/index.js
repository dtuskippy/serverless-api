'use strict';

require('dynamoose');
const personModel = require('./personModel.js');

exports.handler = async (event) => {

  let peopleId = event?.pathParameters?.peopleId;
  console.log('|||---peopleId---|||', peopleId)

  const response = { statusCode: null, body: null };

  try {
    let deletedItem = await personModel.delete(peopleId);
    response.statusCode = 200;
    response.body = JSON.stringify({message: 'Success', itemDeleted: deletedItem});

  }catch (error){
    console.log(error);
    response.statusCode = 500;
    response.body = JSON.stringify(error.message);
  }

  return response;
};
