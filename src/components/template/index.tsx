import React from "react";
import {Outlet} from "react-router-dom";
import "./MainTemplate.css";
import NavBar from "../UI/molecules/navbar";

const MainTemplate = () => {
	return (
		<div>
			<NavBar />
			<div className="pages-content">
				<Outlet />
			</div>
		</div>
	);
};

export default MainTemplate;
