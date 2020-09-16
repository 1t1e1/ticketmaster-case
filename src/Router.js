import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { HomePage, DetailPage, NotFoundPage } from "./containers";

export default function AppRouter() {
	return (
		<Router>
			<div>
				<Nav>
					<NavItem>
						<NavLink tag={Link} to="/">
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to="/ticket-detail/192932012">
							Detial 192932012
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to="/ticket-detail/918299248">
							Detial 918299248
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to="/not-matched">
							404 page
						</NavLink>
					</NavItem>
				</Nav>

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
