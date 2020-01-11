const express = require('express')
const router = express.Router()
const User = require('../../models/user');

router.get('/', (req, res, next) => {
	res.json({
		status: 'API is Working',
		msg: "made With Love by Hadi Houssainy"
	});
});

router.post('/', async (req, res, next) => {
	if(!req.body.name){
		res.status(400).json({msg: 'user not added'})
		return;
	}
	const user = new User({
		name: req.body.name
	});
	try {
		const newUser = await user.save();
		res.status(201).json(user)
	}
	catch (err) {
		res.status(400).json({msg: err.message})
	}
})

router.get('/:id', async (req, res, next) => {

});

module.exports = router ;