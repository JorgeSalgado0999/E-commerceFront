import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			<Navbar>
				<Container>
					<Navbar.Brand href="/">Bazaar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/login">Iniciar Sesión</Nav.Link>
						<Nav.Link href="/profile">Perfil</Nav.Link>
					</Nav>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link href="/cart">Carrito</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
