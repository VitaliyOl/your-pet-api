const isValidToken = require('./tokenValidator');
const isValidUserBody = require('./userBodyValidator');
const isValidLoginData = require('./isValidLoginData');
const isValidPetsBody = require('./petsBodyValidator');
const isValidId = require('./isValidId');
const upload = require('./imageUpload');

module.exports = {
	isValidToken,
	isValidUserBody,
	isValidLoginData,
	isValidPetsBody,
	isValidId,
	upload,
};
