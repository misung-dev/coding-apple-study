import { useParams } from "react-router-dom";
import styled from "styled-components";

// 장점1. CSS 파일 오픈할 필요없이 JS 파일에서 바로 스타일넣을 수 있습니다.
// 장점2. 여기 적은 스타일이 다른 JS 파일로 오염되지 않습니다. 원래 그냥 CSS파일은 오염됩니다.
// 장점3. 페이지 로딩시간 단축됩니다.
// 왜냐면 저기 적은 스타일은 html 페이지의 <style>태그에 넣어줘서 그렇습니다.

// 단점1. JS 파일이 매우 복잡해집니다.
// 그리고 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분도 어렵습니다.
// 단점2. JS 파일 간 중복 디자인이 많이 필요하면 어쩌죠?
// 다른 파일에서 스타일 넣은 것들 import 해와서 쓰면 됩니다. 근데 그럼 CSS파일 쓰는거랑 차이가 없을 수도요
// 단점3. CSS 담당하는 디자이너가 있다면 협업시 불편할텐데
// 그 사람이 styled-components 문법을 모른다면, 그 사람이 CSS로 짠걸 styled-components 문법으로 다시 바꾸거나 그런 작업이 필요하겠군요.

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
	let 찾은상품 = props.shoes.find(function (x) {
		return x.id == id;
	});

	return (
		<div className="container">
			<YellowBtn bg="blue">버튼</YellowBtn>
			<YellowBtn bg="yellow">버튼</YellowBtn>
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
