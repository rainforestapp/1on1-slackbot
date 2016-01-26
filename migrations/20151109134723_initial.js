exports.up = function(knex, Promise) {
  return knex.schema.createTable('meetings', function(table){
    table.increments('id').primary();
    table.integer('host_id');
    table.integer('guest_id');
    table.datetime('completed_at');
    table.timestamps();
  })

  .createTable('users', function(table){
    table.increments('id').primary();
    table.integer('github_id').unique();
    table.datetime('completed_at');
    table.timestamps();
  })

  .createTable('organisation', function(table){
    table.increments('id').primary();
    table.integer('github_id').unique();
    table.datetime('completed_at');
    table.timestamps();
  })
}

exports.down = function(knex, Promise) {

  
};
