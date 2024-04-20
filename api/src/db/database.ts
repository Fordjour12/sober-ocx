import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as onboard from "./schema/onboarding";
import { onboarding } from "./schema/onboarding";
import * as user from "./schema/user";

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
