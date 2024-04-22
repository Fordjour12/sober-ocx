import { Hono } from "hono";
import { onBoardingUser, updateBoarding, updateUserId } from "../db/database";

const boarding = new Hono();

boarding.get("/", (c) => {
	return c.text("Hello boarding route!");
});
/**
 *  TODO:
 *  [] after a  user has been created, the user should be able to add their reason for sobriety
 * 	[] add user id to the onboarding [user_id] table
 *  [] the user should be able to add their sober date
 *  [] the user should be able to add their reason for sobriety
 *
 *  [] we can query the user by their email/username
 *  [] then we add the user_id to the onboarding table
 *
 * */

boarding.post("/reason", async (c) => {
	const body = await c.req.json();

	const data = await onBoardingUser({
		reasonForSobriety: body.reasonForSobriety ?? "",
		soberDate: body.soberDate,
	});

	return c.json({ message: data }, { status: 200 });
});


boarding.put("/reason/:id", async (c) => {
	const id = c.req.param("id")
	const body = await c.req.json();

	const data = await updateBoarding(body.reasonForSobriety, id);

	return c.json({ message: data }, { status: 200 });
});

boarding.put("/user/:id", async (c) => {
	const id = c.req.param("id")
	const body = await c.req.json();

	await updateUserId(body.userId, id);

	return c.json({ message: "userId updated" }, { status: 200 });
})

export default boarding;
