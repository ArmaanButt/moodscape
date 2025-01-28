import { type Config } from "drizzle-kit";


export default {
  schema: "./src/drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["moodscape-next_*"],
} satisfies Config;
