const GetInitials = (grpName) => {
	const words = grpName.trim().split(" ");
	if (words.length >= 2) {
		const firstIn = words[0][0].toUpperCase();
		const lastIn = words[1][0].toUpperCase();
		return `${firstIn}.${lastIn}`;
	} else if (words.length < 2) {
		return words[0].slice(0, 1).toUpperCase();
	}
	return "NA";
};

export default GetInitials;
