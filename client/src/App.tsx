import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./pages/Header";
import {Footer} from "./pages/Footer";
import {Main} from "./pages/Main";

function App() {

    return (
		<div className="App">
			<Header></Header>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
    );
}

export default App;
