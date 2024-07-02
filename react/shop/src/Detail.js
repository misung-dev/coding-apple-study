import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
	let [count, setCount] = useState(0);
	let [num, setNum] = useState("");
	let [alert, setAlert] = useState(true);

	// Alert 타이머 설정
	useEffect(() => {
		const timer = setTimeout(() => {
			setAlert(false);
		}, 2000);
		// Cleanup 함수
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (isNaN(num)) {
			window.alert("그러지 마세요");
		}
	}, [num]);

	return (
		<div className="container">
			{alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
			<YellowBtn bg="blue">버튼</YellowBtn>
			<input
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>
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
		</div>
	);
}

export default Detail;
