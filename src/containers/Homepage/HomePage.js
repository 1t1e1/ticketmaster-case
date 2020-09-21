import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../state/ducks/mainTable/actions";
import Comps from "../../components";
import { req_producer } from "../../constant";
// import { Pagination } from "../../components/HomePage";

export default function Homepage() {
	const { isLoading, errorMessage } = useSelector((state) => ({
		isLoading: state.mainTable.isLoading,
		errorMessage: state.mainTable.errorMessage,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEvents(req_producer(0)));
	}, []);

	if (isLoading) return <div> loading from home page </div>;
	// daha guzel nasil yazilabilir?
	// if (!data._embedded) return <div> false case loading from home page </div>;
	if (errorMessage)
		return (
			<div>
				{" "}
				<h3> Error Message : </h3>
				<div>{JSON.stringify(errorMessage, null, 8)} </div>
			</div>
		);

	return (
		<div>
			<Comps.SearchInput></Comps.SearchInput>
			<Comps.Table></Comps.Table>
			<Comps.Pagination pagilong={3}></Comps.Pagination>
		</div>
	);
}
