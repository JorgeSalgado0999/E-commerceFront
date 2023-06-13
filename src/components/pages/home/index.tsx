import React, {useContext, useEffect, useState} from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "@/components/UI/molecules/header";

import styles from "./Home.module.css";
import {useNavigate} from "react-router";

const Home = () => {
	const navigate = useNavigate();

	function productHandler() {
		console.log("Producto");
		navigate("/product");
	}

	return (
		<>
			<Header />

			{/* Otro */}
			<Row className={` ${styles.cards}`}>
				<Card style={{width: "18rem"}}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Tarjeta Producto</Card.Title>
						<Card.Text>Esta será la descripción del producto</Card.Text>
						<Button variant="primary" onClick={() => productHandler()}>
							Botón Detalles
						</Button>
					</Card.Body>
				</Card>
			</Row>
		</>
	);
};

export default Home;
