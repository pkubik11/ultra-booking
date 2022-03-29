import { Routes, Route } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Faq from "./views/FAQ";
import List from "./views/List";

const MainRouter = () => {
	return (         
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/faq" element={<Faq />} />
			<Route path="/list" element={<List />} />
		</Routes>
	);
}
export default MainRouter;