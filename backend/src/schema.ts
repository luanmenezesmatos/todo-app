import { serial, text, pgEnum, timestamp, pgTable } from "drizzle-orm/pg-core";

const userRoleEnum = pgEnum("user_role", ["manager", "customer"]);
 
export const user = pgTable("user", {
  id: serial("id"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  role: userRoleEnum("customer").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});