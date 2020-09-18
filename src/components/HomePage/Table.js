import React from "react";
import { useSelector } from "react-redux";
import Row from "./Row";

export default function Table({ data, loading }) {
	const { events } = useSelector((state) => ({
		events: state.mainTable.events,
	}));

	if (loading) {
		return <div className="my-table">Loading from table</div>;
	} else {
		return (
			<div className="my-table">
				<h1> Table</h1>
				{events.map((item, index) => {
					return <Row key={item.id}>{item.name}</Row>;
				})}
			</div>
		);
	}
}
