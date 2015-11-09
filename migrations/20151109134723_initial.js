exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedule', function(table){
    table.increments('id').primary();
    table.string('team_name').unique();
    table.string('github_id').unique();
    table.integer('team_id');
    table.timestamps();
  });
exports.down = function(knex, Promise) {

  
};
