import mimoticon from '../../assets/mimoticon.png';
import './Home.css';

const Home = (props) => {
	return (
		<section id="home" className="home-section">
			<div className="intro-box">
				<div className="intro-image-wrapper">
					<img src={mimoticon} alt="미모티콘" className="intro-image" />
				</div>	

				<div className="intro-text">
					<h2>안녕하세요!</h2>
					<p>
						저는 백엔드 개발자 <strong>이지현</strong>입니다. <br />
						새로운 기술과 어려운 문제에 도전하는 것을 좋아합니다. 🚀<br />
						끊임없이 배우고 성장하는 개발자가 되기 위해 노력하겠습니다.😊					
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;