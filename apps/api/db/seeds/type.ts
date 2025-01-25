import { Knex } from "knex";
import { types } from "~/type/seeds";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("type").del();

    // Inserts seed entries
    await knex('type').insert(types).onConflict('identifier').ignore();
}
