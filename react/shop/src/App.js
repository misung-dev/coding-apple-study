import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	let [shoes] = useState(data);
	console.log(shoes);

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar bg="dark" variant="dark">
								<Container>
									<Navbar.Brand href="#home">Navbar</Navbar.Brand>
									<Nav className="me-auto">
										<Nav.Link href="#home">Home</Nav.Link>
										<Nav.Link href="#features">Features</Nav.Link>
										<Nav.Link href="#pricing">Pricing</Nav.Link>
									</Nav>
								</Container>
							</Navbar>
							<div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>\{" "}
							<div className="container">
								<div className="row">
									{shoes.map((a, i) => {
										return <Card shoes={shoes[i]} i={i} />;
									})}
								</div>
							</div>
						</>
					}
				/>
				<Route path="/detail" element={<div>상세페이지</div>} />
				<Route path="/about" element={<div>어바웃페이지</div>} />
			</Routes>
		</div>
	);
}

function Card(props) {
	return (
		<div className="col-md-4">
			<img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}</p>
		</div>
	);
}

export default App;
