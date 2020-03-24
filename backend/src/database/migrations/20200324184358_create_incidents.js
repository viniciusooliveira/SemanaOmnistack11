
exports.up = function(knex) {
    return knex.schema.createTable('incidents', (table) => {
        table.increments(); //Chave primária com auto_increment

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); //Criação do relacionamento (chave estrangeira)
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
