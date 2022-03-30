import React from "react";

import "./styles/App.css";
import MainRouter from "./MainRouter";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<div className="App-body max-w-5xl mx-auto px-4 py-5">
				<MainRouter />
			</div>
		</div>
	);
}

export default App;