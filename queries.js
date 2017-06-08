// Why use pg-promises? It rids the worries of using managing low-level connection
// bluebird is reputed to be faster than ES6 promises
var promise = require('bluebird');

var options = {
	promiseLib: promise
};

// pgp is an instance of pg-promises
// options is required, even if there are no properties
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/puppies';
var db = pgp(connectionString)

module.exports = {
	getAllPuppies: getAllPuppies,
	getSinglePuppy: getSinglePuppy,
	createPuppy: createPuppy,
	updatePuppy: updatePuppy,
	removePuppy: removePuppy
};


