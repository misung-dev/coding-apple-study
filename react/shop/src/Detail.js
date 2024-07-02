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

function TabContent({ 탭 }) {
	let [fade, setFade] = useState("");

	// Q. setTimeout 왜 씁니까
	// 리액트 18버전 이상부터는 automatic batch 라는 기능이 생겼습니다.
	// state 변경함수들이 연달아서 여러개 처리되어야한다면
	// state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됩니다.
	// 그래서 'end' 로 변경하는거랑 ' ' 이걸로 변경하는거랑 약간 시간차를 뒀습니다.
	// 찾아보면 setTimeout 말고 flushSync() 이런거 써도 될 것 같기도 합니다. automatic batching을 막아줍니다.
	useEffect(() => {
		setTimeout(() => {
			setFade("end");
		}, 100);
		setFade("end");

		return () => {
			setFade("");
		};
	}, [탭]);

	return (
		<div className={"start " + fade}>
			{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
		</div>
	);
}

export default Detail;
