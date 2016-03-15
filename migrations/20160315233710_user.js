exports.up = function(knex, Promise) {
	return knex.schema.withSchema().createTable('user', function (table) {
		table.increments();
		table.string('email');
		table.string('password');
		table.string('display_name');
		table.dateTime('created_on');
		table.dateTime('modified_on');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.withSchema('modelizer').dropTable('user');
};
