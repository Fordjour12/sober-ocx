import { Hono } from "hono";

const boarding = new Hono();

boarding.get("/", (c) => {
	return c.text("Hello boarding route!");
});

boarding.post("/reason", (c) => {
	const body = c.req.json;

	return c.json({ body });
});

export default boarding;
