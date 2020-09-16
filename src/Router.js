import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, DetailPage, NotFoundPage } from "./containers";

export default function AppRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/ticket-detail/192932012">Detial 192932012</Link>
						</li>
						<li>
							<Link to="/ticket-detail/918299248">Detial 918299248 </Link>
						</li>
						<li>
							<Link to="/not-matched">404 page</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/ticket-detail/:ticketId" exact>
						<DetailPage />
					</Route>
					<Route path="/" exact>
						<HomePage></HomePage>
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
