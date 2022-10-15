const dynamoose = require('dynamoose');
const personModel = require('./personModel.js');

exports.handler = async (event) => {
console.log('|||--EVENT.BODY--|||', event.body);

let parsedBody = JSON.parse(event.body);
let { peopleId, name, email } = parsedBody;

let person = { peopleId, name, email };
console.log('|||--EVENT--|||', person);

    const response = {statusCode: 200, body: null};
    
       try {
        let newPerson = await personModel.create(person);
        response.statusCode = 200;
        response.body = JSON.stringify(newPerson);

    } catch (error) {
        console.log(error);
        response.statusCode = 500;
        response.body = JSON.stringify(error.message);
    }


    return response;
};

