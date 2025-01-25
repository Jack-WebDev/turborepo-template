import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('client', (t) => {
    t.text('id').primary().defaultTo(knex.raw('generate_cuid()'));
    t.specificType('scope', 'text[]').notNullable().defaultTo('{}');
    t.string('secret').notNullable();
    t.string('name').notNullable();
    t.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('client');
}
