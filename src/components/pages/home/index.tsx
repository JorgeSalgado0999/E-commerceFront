import React, {useContext, useEffect, useState} from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {p1, p2, p3} from "@/assets";

const Home = () => {
	return (
		<>
			<Navbar>
				<Container>
					<Navbar.Brand href="#home">Bazaar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Inicio</Nav.Link>
						<Nav.Link href="#features">Perfil</Nav.Link>
						<Nav.Link href="#pricing">Carrito</Nav.Link>
					</Nav>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>Compra y Vende de todo</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Otro */}

			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={p1} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={p2} alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={p3} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			{/* Otro */}
			<Container>
				<Row className="center">
					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>

					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>
					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>
				</Row>

				{/* otro */}
				<Row>
					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>
					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>
					<Card style={{width: "18rem"}}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Tarjeta Producto</Card.Title>
							<Card.Text>Esta será la descripción del producto</Card.Text>
							<Button variant="primary">Botón Detalles</Button>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
};

export default Home;
