import React from "react";
import "./App.css";
import AppRouter from "./Router";
import { Container } from "reactstrap";

function App() {
	return (
		<Container>
			<AppRouter></AppRouter>
		</Container>
	);
}

export default App;
