import { Hono } from "hono";
import { logger } from "hono/logger";
import { auth } from "./authentication/auth";
import boarding from "./boarding/board";

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.get("/hello/:name", (c) => {
	const name = c.req.param("name");

	return c.json({ message: `Hello ${name}!` });
});

app.route("/auth", auth);
app.route("/board", boarding);

app.notFound((c) => {
	return c.json({ message: "Not Found" }, 404);
});

app.onError((err, c) => {
	console.error(`Error is : ${err}`);

	return c.json({ message: "Internal Server Error" }, 500);
});

// export default app;

export default {
	port: 3000,
	fetch: app.fetch,
};
