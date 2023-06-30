export const up = async (knex) => {
  await knex.schema.createTable("tokens", (table) => {
    table.text("id").notNullable().unique().primary()
    table.integer("userId").notNullable().references("id").inTable("users")
    table.timestamps(true, true, true)
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("tokens")
}
