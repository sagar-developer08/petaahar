const path = require("path");

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	eslint: { ignoreDuringBuilds: true },
	env: {
		JWT_SECRET: "zxcvbnmasdfghjklpoiuytrewqasdfghmnbvcxzasdfghjloiuytreqsd",
		// CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dsj9t6adh",
		CLOUDINARY_URL:"cloudinary://998169537827179:OdZZJsvvLEd6rrDWQb0VqQVFFFg@dsj9t6adh",
		CLOUD_NAME: "dsj9t6adh",
		UPLOAD_PRESET: "vpgnz9j6",
	},
	trailingSlash: true,
};
