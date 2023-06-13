import React, {Profiler, useContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// import {NavBar} from "components/UI/organisms/navbar";
import {CreateProduct, History, Home, Products} from "@/components/pages";
import MainTemplate from "@/components/template";
import {Login} from "@/components/pages/authentication";
import {Register} from "@/components/pages/authentication/Register";
import {Profile} from "@/components/pages/profile";
// import {Main} from "components/templates";

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* public urls */}
				<Route path="/" element={<MainTemplate />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="profile" element={<Profile />}>
						<Route path="create-product" element={<CreateProduct />} />
						<Route path="products" element={<Products />} />
						<Route path="history" element={<History />} />
					</Route>

					<Route path="profile/create-product" element={<CreateProduct />} />
					<Route path="profile/products" element={<Products />} />
					<Route path="profile/history" element={<History />} />
				</Route>

				<Route path="/*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};
