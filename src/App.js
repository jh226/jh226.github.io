import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import DotNav from './layout/DotNav';
import Main from './pages/Main';
import NotFound from './NotFound';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header/>
        <DotNav />
				<div style={{ paddingTop: '60px' }}>
					<Routes>
						<Route path="/portfolio" element={<Main />}></Route>

						{/*일치하는 라우트가 없는경우 처리 */}
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;