// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  integer,
  pgTableCreator,
  text,
  vector,
} from "drizzle-orm/pg-core";


/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `moodscape_${name}`);


export const paintings = createTable(
  "paintings", 
  {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  title: text("title").notNull(),
  imageUrl: text("image_url"),
  imageLocation: text("image_location"),
  description: text("description"),
  currentLocation: text("current_location"),
  dimensions: text("dimensions"),
  llmDescription: text("llm_description"),
  technique: text("technique"),
  embedding: vector("embedding", {dimensions: 1024})
})
