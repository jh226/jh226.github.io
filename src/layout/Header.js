import './Header.css';

function Header(props) {
  const handleEmailClick = () => {
    window.location.href = 'mailto:youremail@example.com'; // ← 여기 너 이메일 주소로 수정!
  };
  
  return (
		<>
      <header className="header">
        <div className='header-menu'>
          <span className="header-item" onClick={handleEmailClick}>
          📩 Mail me
        </span>
        </div>
        
      </header>
		</>
  );
}

export default Header;

