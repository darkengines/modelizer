exports.up = function(knex, Promise) {
	return knex.schema.withSchema().createTable('user_relation', function (table) {
		table.integer('left_user_id').references('user.id');
		table.integer('right_user_id').references('user.id');
		table.unique(['left_user_id', 'right_user_id']);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.withSchema().dropTable('user_relation');
};
