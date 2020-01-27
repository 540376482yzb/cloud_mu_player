
exports.up = function (knex) {
  return knex.schema
    .createTable('music_item', (table) => {
      table.increments('id');
      table.text('title').notNullable();
      table.text('src').notNullable();
      table.string('type').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('playlist', (table) => {
      table.increments('id');
      table.string('title').notNullable();
      table.string('status').notNullable().defaultTo('draft');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('music_playlist', (table) => {
      table.increments('id');
      table.string('title').notNullable();
      table.integer('music_id').references('id').inTable('music_item');
      table.integer('playlist_id').references('id').inTable('playlist');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
  return knex.schema.dropTable('music_playlist').dropTable('playlist').dropTable('music_item')
};
