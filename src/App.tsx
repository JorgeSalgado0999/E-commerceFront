import {useState} from "react";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

/* custom imports */
// import "@/Global/css/flexboxgrid.css";
// import "@/Global/css/GlobalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Global/css/GlobalStyles.css";
import "./Global/css/flexboxgrid.css";
import {Routing} from "./routes/Routing";

function App() {
	return <Routing />;
}

export default App;
