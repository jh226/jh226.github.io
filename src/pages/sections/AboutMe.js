import './AboutMe.css';

const AboutMe = (props) => {
	return (
		<section id="aboutMe" className="aboutMe-section">
			<div className="timeline" style={{ '--items': 9 }}>
				<h1>타임라인</h1>
				<ul>
					<li style={{ '--index': 1 }}>
					<h3>2017.02</h3>
					<p>🎓 범서고등학교 졸업</p>
					</li>
					<li style={{ '--index': 2 }}>
					<h3>2017.03</h3>
					<p>🏫 우송대학교 입학</p>
					</li>
					<li style={{ '--index': 3 }}>
					<h3>2021.08</h3>
					<p>🏆️ 학생창업유망팀 300 경진대회 - 한국연구재단</p>
					</li>
					<li style={{ '--index': 4 }}>
					<h3>2023.03</h3>
					<p>Windows Developer 고급과정</p>
					</li>
					<li style={{ '--index': 5 }}>
					<h3>2023.08</h3>
					<p>
						🎓Windows Developer 고급과정 수료
					</p>
					</li>
					<li style={{ '--index': 6 }}>
					<h3>2024.03</h3>
					<p>
						지능형 로봇 서비스 개발을 위한 SW개발자 양성 과정
					</p>
					</li>
					<li style={{ '--index': 7 }}>
					<h3>2024.08</h3>
					<p>
						🎓지능형 로봇 서비스 개발을 위한 SW개발자 양성 과정 수료
					</p>
					</li>
					<li style={{ '--index': 8 }}>
					<h3>2024.09</h3>
					<p>KT AIVLE SCHOOL</p>
					</li>
					<li style={{ '--index': 9 }}>
					<h3>2024.09</h3>
					<p>🎓KT AIVLE SCHOOL 수료</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default AboutMe;