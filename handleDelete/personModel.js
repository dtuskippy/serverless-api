'use strict';

const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  peopleId: String,
  name: String,
  email: String,
})

const personModel = dynamoose.model('lab-18-student', personSchema);

module.exports = personModel;