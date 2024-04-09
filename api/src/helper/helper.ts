import { sign, verify } from "hono/jwt";

const genToken = async (payload: object, secret: string) => {
	const signJWT = await sign(payload, secret);

	console.log(signJWT);
	return signJWT;
};

const verifyToken = async (token: string, secret: string) => {
	const verifyJWT = await verify(token, secret);

	console.log(verifyJWT);
	return verifyJWT;
};

export { genToken, verifyToken };
