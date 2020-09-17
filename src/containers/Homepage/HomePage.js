import React, { useState, useEffect } from "react";
import axios from "axios";

import Comps from "../../components";
import { request_url } from "../../constant";
// import { Pagination } from "../../components/HomePage";

export default function Homepage() {
	const [value, setValue] = useState("hii!");
	const [state, setState] = useState("");
	useEffect(() => {
		axios
			.get(request_url)
			.then((res) => {
				const data = res.data;
				setState(data);
			})
			.catch((err) => {
				setState("");
				console.log(err);
			});
	}, []);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	if (!state) return <div> loading from home page </div>;
	const { _embedded, page } = state;
	const pre = JSON.stringify(page, null, 2);

	console.log(_embedded);
	console.log(page);
	return (
		<div>
			<Comps.SearchInput
				value={value}
				handleChange={handleChange}
			></Comps.SearchInput>
			<Comps.Table data={_embedded.events}>
				<div> what is it </div>
			</Comps.Table>
			<Comps.Pagination {...page}></Comps.Pagination>
			{/* <pre>response is {pre}</pre> */}
		</div>
	);
}
