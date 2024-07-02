import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Detail";
import axios from "axios";

function App() {
	let [shoes] = useState(data);
	let navigate = useNavigate();

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							onClick={() => {
								navigate("/");
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/detail");
							}}
						>
							Detail
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/about");
							}}
						>
							About
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/event");
							}}
						>
							event
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>\{" "}
							<div className="container">
								<div className="row">
									{shoes.map((a, i) => {
										return <Card shoes={shoes[i]} i={i} />;
									})}
								</div>
							</div>
							<button
								onClick={() => {
									axios
										.get("https://codingapple1.github.io/shop/data2.json")
										.then((결과) => {
											console.log(결과.data);
										})
										.catch(() => {
											console.log("실패함");
										});
								}}
							>
								버튼
							</button>
						</>
					}
				/>
				{/* 현재url파라미터에 입력된숫자를 넣기 */}
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="/about" element={<About />}>
					<Route path="member" element={<div>멤버들</div>} />
					<Route path="location" element={<div>회사위치</div>} />
				</Route>
				<Route path="/event" element={<EventPage />}>
					<Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
					<Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
				</Route>
			</Routes>
		</>
	);
}

function EventPage() {
	return (
		<div>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	);
}

function About() {
	return (
		<div>
			<h4>about페이지임</h4>
			<Outlet></Outlet>
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
