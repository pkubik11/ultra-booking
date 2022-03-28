import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import MainRouter from './MainRouter';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ul>
					<li><Link to="/">Dashboard</Link></li>
					<li><Link to="/faq">FAQ</Link></li>
					<li><Link to="/list">List</Link></li>
				</ul>
				<MainRouter />
			</header>
		</div>
	);
}

export default App;