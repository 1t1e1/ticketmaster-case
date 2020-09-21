import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import Row from "./Row";

export default function TableComp({ loading }) {
	const { events, page } = useSelector((state) => ({
		events: state.mainTable.events,
		page: state.mainTable.page,
	}));

	if (loading) {
		return <div className="my-table">Loading from table</div>;
	} else {
		const { number, size } = page;
		return (
			<Table className="table-striped  ">
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Name</th>
						<th>Detail </th>
						{/* <th>ID </th> */}
					</tr>
				</thead>

				<tbody>
					{events.map((item, index) => {
						return (
							<Row key={item.id} data={item} index={index + 1 + size * number}>
								{item.name}
							</Row>
						);
					})}
				</tbody>
			</Table>
		);
	}
}
