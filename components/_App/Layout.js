import React from "react";
import Head from "next/head";
import GoTop from "../Shared/GoTop";

import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
	const [loader, setLoader] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => setLoader(false), 2000);
	}, []);
	return (
		<>
			<Head>
				<title>Pet's Aahar  - The Perfecr balance of Taste and Nutrition</title>
				<meta
					name="description"
					content="We all love our pets, and we want to give them the best of everything. But sometimes, it's hard to find the time to cook for them the way we'd like to. That's where Pet's Aahar comes in.We provide home cooked food for dogs that is nutritionally balanced and full of the goodness they need to stay healthy and happy. Whether you're looking for a meal to supplement your dog's regular diet or something special for a special occasion, we've got you covered.Our team is passionate about pets and committed to providing the best possible dining experience for them. We only use fresh, wholesome ingredients in our recipes, and we make sure to include a variety of flavors and textures in each meal to keep things interesting."
				/>
				<meta
					name="og:title"
					property="og:title"
					content="Pet's Aahar"
				></meta>
				<meta
					name="instagram:card"
					content="Pet's Aahar"
				></meta>
				<link
					rel="canonical"
					href="https://www.petsaahar.com//"
				></link>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/dsj9t6adh/image/upload/v1689265777/TRIAL_3_gaxthg.png"
				/>
			</Head>

			{loader ? "Loading" : children}

			<GoTop scrollStepInPx="100" delayInMs="10.50" />
		</>
	);
};

export default Layout;
