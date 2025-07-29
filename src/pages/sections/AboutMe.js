import mimoticon from '../../assets/mimoticon.png';
import './AboutMe.css';

const AboutMe = (props) => {
	return (
		<section id="aboutMe" className="aboutMe-section">
			<div class="history">
				<div>
					<h2>2020</h2>
					<ol>
					<li>범서고등학교 졸업</li>
					</ol>
				</div>
				<div>
					<h2>2019</h2>
					<ol>
						<li>우송대학교 졸업</li>
						<li>스마트IT보안학과</li>
					</ol>
				</div>
			</div> 
		</section>
	);
};

export default AboutMe;