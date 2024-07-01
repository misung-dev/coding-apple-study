import { useState } from "react";
import "./App.css";

function App() {
	let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
	let [따봉, 따봉변경] = useState([0, 0, 0]); // 각 상태를 별개로 관리
	let [modal, setModal] = useState(false);
	let [입력값, 입력값변경] = useState("");

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>
			</div>
			{글제목.map(function (a, i) {
				return (
					<div className="list" key={i}>
						<h4
							onClick={() => {
								if (i === 0) {
									setModal(!modal);
								}
							}}
						>
							{글제목[i]}
							<span
								onClick={(e) => {
									e.stopPropagation(); // 따봉 클릭 시 모달 토글 방지 (이벤트 버블링 방지)
									let copy = [...따봉];
									copy[i] = copy[i] + 1;
									따봉변경(copy);
								}}
							>
								👍
							</span>
							{따봉[i]}
						</h4>
						<p>2월 18일 발행</p>
						<button
							onClick={() => {
								let copy = [...글제목];
								copy.splice(i, 1);
								글제목변경(copy);
							}}
						>
							삭제
						</button>
					</div>
				);
			})}
			{/* (참고)
				근데 위 코드 실행해보면 a를 입력하면 콘솔창에 아무것도 안뜨지 않습니까
				aa를 입력하면 a만 콘솔창에 뜨고요.
				왜냐면 state 변경함수 특징 때문인데 state 변경함수는 약간 늦게 처리됩니다.
				전문용어로 async하게 (비동기적으로) 처리된다고 합니다.  */}
			<input
				onChange={(e) => {
					입력값변경(e.target.value);
				}}
			/>

			{/* 발행버튼누르면 글제목state에 유저가 입력한값만 하나 끼워넣으면 됩니다. 
			1. 버튼누르면 일단 글제목state를 카피부터했습니다. array 형태의 state 조작은 우선 카피부터하면 된댔습니다.
			2. 카피한거에 unshift(입력값) 해줬는데 이게 뭐냐면 array자료 맨 앞에 자료추가하는 문법입니다. 
			3. 그리고 state변경함수 사용했습니다. */}
			<button
				onClick={() => {
					let copy = [...글제목]; // array, object 형태의 state를 변경하고 싶으면 copy를 하고 시작.
					copy.unshift(입력값);
					글제목변경(copy);
				}}
			>
				글발행
			</button>
			{modal === true ? <Modal 글제목변경={글제목변경} 글제목={글제목} /> : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.글제목[0]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button
				onClick={() => {
					props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬 독학"]);
				}}
			>
				글수정
			</button>
		</div>
	);
}

export default App;
