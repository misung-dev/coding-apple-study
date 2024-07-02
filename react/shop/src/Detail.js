import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

let YellowBtn = styled.button`
	background: ${(props) => props.bg};
	color: ${(props) => (props.bg == "blue" ? "white" : "black")};
	padding: 10px;
`;

let Box = styled.div`
	background: gray;
	padding: 20px;
`;

function Detail(props) {
	let { id } = useParams();
	let 찾은상품 = props.shoes.find((x) => x.id == id);
	let [탭, 탭변경] = useState(0);

	return (
		<div className="container">
			<div className="alert alert-warning">2초이내 구매시 할인</div>

			<div className="row">
				<div className="col-md-6">
					<img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{찾은상품.title}</h4>
					<p>{찾은상품.content}</p>
					<p>{찾은상품.price}원</p>
					<button className="btn btn-danger">주문하기</button>
				</div>
			</div>

			{/* 탭 UI 만들기 */}
			<Nav variant="tabs" defaultActiveKey="link0">
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							탭변경(0);
						}}
						eventKey="link0"
					>
						버튼0
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							탭변경(1);
						}}
						eventKey="link1"
					>
						버튼1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						onClick={() => {
							탭변경(2);
						}}
						eventKey="link2"
					>
						버튼2
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent 탭={탭} />
		</div>
	);
}

function TabContent(props) {
	if (props.탭 == 0) {
		return <div>내용0</div>;
	} else if (props.탭 == 1) {
		return <div>내용1</div>;
	} else if (props.탭 == 2) {
		return <div>내용2</div>;
	}
}

// 센스좋으면 if 필요 없을 수도 있습니다
// function TabContent({ 탭 }) {
// 	return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭];
// }

export default Detail;
