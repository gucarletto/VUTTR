import Knex from 'knex';

export async function up(knex:Knex) {
  return knex.schema.createTable('tools', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('link');
    table.string('description');
    table.json('tags');
  });
}

export async function down(knex:Knex) {
  return knex.schema.dropTable('tools');
}