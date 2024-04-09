const hashPassword = async (password: string) => {
	const hashedPassword = await Bun.password.hash(password);

	return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
	const isPasswordValid = await Bun.password.verify(password, hashedPassword);

	return isPasswordValid;
};

export { hashPassword, verifyPassword };
