const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	positive: {
		type: Number,
		default: 0
	},
	negative: {
		type: Number,
		default: 0
	}
});

let User = mongoose.model('User', UserSchema);

module.exports = User;