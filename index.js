var User = require('./user/user').User;

User.where('id', 1).fetch().then(function(result) {
	console.log(result);
});