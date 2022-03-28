import React from 'react';

import './App.css';
import MainRouter from './MainRouter';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				<div className="App-body">
					<MainRouter />
				</div>
			</header>
		</div>
	);
}

export default App;