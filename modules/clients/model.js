var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, default: '' },
	email: {type: String, required:true},
	num:{type: Number, required:true}
});		

module.exports = mongoose.model('Client', schema);