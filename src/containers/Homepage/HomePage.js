import React, { useState, useEffect } from "react";
import axios from "axios";

import Comps from "../../components";
import { request_url } from "../../constant";

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

	const pre = JSON.stringify(state, null, 2);
	const { _embedded, page } = state;

	if (!state) return <div> loading </div>;

	console.log(_embedded);
	console.log(page);
	return (
		<div>
			<Comps.SearchInput
				value={value}
				handleChange={handleChange}
			></Comps.SearchInput>
			<pre>response is {pre}</pre>
		</div>
	);
}
