import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";

// import {NavBar} from "components/UI/organisms/navbar";
import {CreateProduct, History, Home, Products} from "@/components/pages";
// import {Main} from "components/templates";

export const Routing = () => {
	return (
		<Routes>
			{/* public urls */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Home />} />
			<Route path="/register" element={<Home />} />

			{/* <Route path="profile" element={<Home />}>
				<Route path="create-product" element={<CreateProduct />} />
				<Route path="products" element={<Products />} />
				<Route path="history" element={<History />} />
			</Route> */}
			<Route path="profile/create-product" element={<CreateProduct />} />
			<Route path="profile/products" element={<Products />} />
			<Route path="profile/history" element={<History />} />

			<Route path="/*" element={<h1>404</h1>} />
		</Routes>
	);
};
