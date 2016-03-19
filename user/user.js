var config = require('../knexfile');
var knex = require('knex')(config.development);
var bookshelf = require('bookshelf')(knex);

var userSchema = {
	id: 'user',
	type: 'object',
	properties: {
		id: {
			type: 'integer'
		},
		email: {
			type: 'string',
			format: 'email'
		},
		password: {
			type: 'string'
		},
		displayName: {
			type: 'string'
		},
		createdOn: {
			type: 'string',
			format: 'date-time'
		},
		modifiedOn: {
			type: 'string',
			format: 'date-time'
		},
		friends: {
			type: 'array',
			items: {
				type: {
					$ref: '#'
				}
			}
		}
	}
}

var User = bookshelf.Model.extend({
	tableName: 'user',
	friends: function() {
		return this.belongsToMany(User);
	}
});

module.exports.User = User;