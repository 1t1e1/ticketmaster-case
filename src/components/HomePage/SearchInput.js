import React from "react";
import { InputGroup, Input, InputGroupAddon, InputGroupText } from "reactstrap";

export default function SearchInput({ value, handleChange }) {
	return (
		<div>
			<h1> state " {value} " </h1>
			<div>
				<InputGroup>
					<Input />
					<InputGroupAddon addonType="append">
						<InputGroupText>Search</InputGroupText>
					</InputGroupAddon>
				</InputGroup>

				<input type="text" value={value} onChange={handleChange} />
			</div>
		</div>
	);
}
