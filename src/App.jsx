import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContentPage from "./Pages/ContentPage";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/content/:grpName" element={<ContentPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
