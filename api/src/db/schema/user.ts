import { relations, sql } from "drizzle-orm";
import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { onboarding } from "./onboarding";

export const user = pgTable(
	"user",
	{
		id: serial("id").primaryKey().notNull(),
		username: text("username").notNull(),
		email: text("email").notNull(),
		password: text("password").notNull(),
		created_at: timestamp("created_at").notNull().default(sql`now()`),
	},
	(userTable) => {
		return {
			emailIdx: index("email_idx").on(userTable.email),
		};
	},
);

export const userRelations = relations(user, ({ one }) => ({
	onboarding: one(onboarding),
}));

export type SelectUser = typeof user.$inferSelect;
export type InsertUser = typeof user.$inferInsert;
