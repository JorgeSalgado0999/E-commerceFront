import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Profile.module.css";

export const Profile = () => {
	return (
		<div>
			<div className={styles.navBar}>
				<Navbar>
					<Container>
						<Nav className="me-auto">
							<Nav.Link href="/profile/purchases">Mis compras</Nav.Link>
							<Nav.Link href="/profile/products">Mis productos</Nav.Link>
						</Nav>
						<Navbar.Toggle />
					</Container>
				</Navbar>
			</div>

			<h2 className="text-center">Información de usuario</h2>
			<h5>Nombre</h5>
			<h5>Apellido</h5>
			<h5>NickName</h5>
			<h5>Correo</h5>
			<h5>Name</h5>
			<h5>Name</h5>
			<h5>Name</h5>
		</div>
	);
};
