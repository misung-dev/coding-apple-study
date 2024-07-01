import { useState } from "react";
import "./App.css";

function App() {
	let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
	let [따봉, 따봉변경] = useState(0);

	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>
			</div>

			{/* 글자 정렬 버튼 */}
			<button
				onClick={() => {
					let copy = [...글제목];
					copy.sort();
					글제목변경(copy);
				}}
			>
				{" "}
				정렬버튼{" "}
			</button>

			{/* 글제목 일부 변경 */}
			<button
				onClick={() => {
					// let copy = 글제목; // 글제목에 있던 화살표가 복사됨
					let copy = [...글제목];
					copy[0] = "여자코트 추천"; // array를 수정했지 변수에 있던 화살표는 수정안됨
					글제목변경(copy);
				}}
			>
				글수정
			</button>

			<div className="list">
				<h4>
					{글제목[0]}
					<span
						onClick={() => {
							따봉변경(따봉 + 1);
						}}
					>
						👍
					</span>
					{따봉}
				</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4>{글제목[1]}</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4>{글제목[2]}</h4>
				<p>2월 17일 발행</p>
			</div>
		</div>
	);
}

export default App;
