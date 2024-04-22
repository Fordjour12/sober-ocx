import { sql } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const onboarding = pgTable("onboading", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id").references(() => user.id, { onDelete: "cascade" }),
	soberDate: text("sober_date").notNull(),
	reasonForSobriety: text("reason_for_sobriety").notNull(),
	createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export type SelectOnBoard = typeof onboarding.$inferSelect;
export type InsertOnBoard = typeof onboarding.$inferInsert;
