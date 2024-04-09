import { eq } from "drizzle-orm";
import { Hono } from "hono";
import db, { createNewUser } from "../db/database";
import { user } from "../db/schema/user";
import { hashPassword, verifyPassword } from "../helper/bcrypt";
import { genToken } from "../helper/helper";

const auth = new Hono();

auth.get("/", async (c) => {
	const res = await db.select().from(user);

	return c.json(
		{
			data: res,
		},
		{
			status: 200,
		},
	);
});

auth.post("/register", async (c) => {
	const body = await c.req.formData();

	const username = body.get("username") as string;
	const password = body.get("password") as string;
	const email = body.get("email") as string;

	const genPassword = await hashPassword(password);

	try {
		const findUser = await db.query.user.findFirst({
			where: eq(user.username, username),
		});

		console.log(findUser);

		if (findUser) {
			return c.json({ message: `User ${username} already exists` });
		}

		const created = await createNewUser({
			username,
			email,
			password: genPassword,
		});

		console.log(created);

		return c.json({ created }, { status: 201 });
	} catch (error) {
		console.error(error);
		return c.json({ message: "Failed to create user" }, { status: 400 });
	}
});

auth.post("/login", async (c) => {
	const body = await c.req.formData();

	const email = body.get("email") as string;
	const password = body.get("password") as string;
	try {
		const usr = await db.query.user.findFirst({
			where: eq(user.email, email),
		});

		if (!usr) {
			return c.json({ message: "user not found" });
		}

		const isPasswordValid = await verifyPassword(password, usr.password);
		if (!isPasswordValid) {
			return c.json({ message: "password error" });
		}

		const token = await genToken(
			{
				id: usr.id,
				username: usr.username,
			},

			process.env.JWT_SECRET_KEY as string,
		);

		return c.json({ ...usr, token }, { status: 200 });
	} catch (error) {}
});

export { auth };
