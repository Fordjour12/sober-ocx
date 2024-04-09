import db from "./database";
import { user } from "./schema/user";

(async () => {
	await db.insert(user).values([
		{
			username: " coolguy87",
			email: " coolguy87@example.com",
			password: "P@ssw0rd1},",
		},
		{
			username: "soccerfan99",
			email: " soccerfan99@email.com",
			password: "Football123!",
		},
		{
			username: "techgeek22",
			email: " techgeek22@domain.com",
			password: "GeekPass22@",
		},
		{
			username: "musiclover123",
			email: " musiclover123@mail.com",
			password: "MusicIsLife456!",
		},
		{
			username: "adventureseeker",
			email: "adventure.seeker@example.org",
			password: "ExploreNow789#",
		},
	]);
})();
