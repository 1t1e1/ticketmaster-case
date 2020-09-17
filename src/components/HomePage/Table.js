import React from "react";
import Row from "./Row";

export default function Table({ data, loading }) {
	console.log(data);
	if (loading) {
		return (
			<div className="my-table">
				kullaniciya islem yapildigina dair bir seyler goster
			</div>
		);
	} else {
		return (
			<div className="my-table">
				<h1> Table</h1>
				{data.map((item, index) => {
					return <Row key={item.id}>{item.name}</Row>;
				})}
			</div>
		);
	}
}
