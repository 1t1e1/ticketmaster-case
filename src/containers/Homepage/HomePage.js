import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../state/ducks/mainTable/actions";
import Comps from "../../components";
// import { Pagination } from "../../components/HomePage";

export default function Homepage() {
	const { data, isLoading, errorMessage } = useSelector((state) => ({
		data: state.mainTable.data,
		isLoading: state.mainTable.isLoading,
		errorMessage: state.mainTable.errorMessage,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEvents());
	}, []);

	if (isLoading) return <div> loading from home page </div>;
	// daha guzel nasil yazilabilir?
	if (!data._embedded) return <div> false case loading from home page </div>;
	if (errorMessage) return <div> Error Message</div>;

	const { _embedded, page, _links } = data;

	return (
		<div>
			<Comps.SearchInput></Comps.SearchInput>
			<Comps.Table data={_embedded.events}></Comps.Table>
			<Comps.Pagination {...page}></Comps.Pagination>
		</div>
	);
}
