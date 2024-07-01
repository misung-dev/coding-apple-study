import { useState } from "react";
import "./App.css";

function App() {
	let [글제목, 글제목변경] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
	let [따봉, 따봉변경] = useState([0, 0, 0]); // 각 상태를 별개로 관리
	let [modal, setModal] = useState(false);

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
								setModal(!modal);
							}}
						>
							{글제목[i]}
							<span
								onClick={() => {
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
						{modal == true ? <Modal 글제목={글제목} /> : null}
					</div>
				);
			})}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.글제목[0]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
