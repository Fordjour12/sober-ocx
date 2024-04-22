import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as onboard from "./schema/onboarding";
import { onboarding } from "./schema/onboarding";
import * as user from "./schema/user";
import { eq } from "drizzle-orm";

const client = new Client({
	connectionString: process.env.DATABASE_URL as string,
});

let isConnected = false;

(async () => {
	if (!isConnected) {
		await client.connect();
		isConnected = true;
	}
})();

const db = drizzle(client, { schema: { ...user, ...onboarding } });

export default db;

export const createNewUser = async (data: user.InsertUser) => {
	return await db.insert(user.user).values(data).returning({
		id: user.user.id,
		username: user.user.username,
		email: user.user.email,
	});
};

export const onBoardingUser = async (data: onboard.InsertOnBoard) => {
	return await db.insert(onboard.onboarding).values(data).returning({
		onboardingId: onboard.onboarding.id,
		soberDate: onboard.onboarding.soberDate,
		reasonForSobriety: onboard.onboarding.reasonForSobriety,
	});
};

export const updateBoarding = async (data: string, id: string) => {
	return await db.update(onboard.onboarding).set({
		reasonForSobriety: data,
	}).where(eq(onboard.onboarding.id, Number(id))).returning({
		onboardingId: onboard.onboarding.id,
	})
}

export const updateUserId = async (user_Id: number, id: string) => {
	return await db.update(onboard.onboarding).set({
		userId: user_Id,
	}).where(eq(onboard.onboarding.id, Number(id)))
}

