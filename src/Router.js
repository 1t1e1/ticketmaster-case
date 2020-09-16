import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

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
					<Route path="/ticket-detail/:ticketId">
						<DetailPage />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="*">
						<NotFoundPage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function DetailPage() {
	let { ticketId } = useParams();
	return (
		<div>
			<h2>Detail page </h2>
			<p> ticket id is {ticketId} </p>
		</div>
	);
}

function NotFoundPage() {
	return <h2>This page is not found.</h2>;
}
