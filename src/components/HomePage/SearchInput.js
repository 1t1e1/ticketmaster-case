import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, InputGroupText } from "reactstrap";

export default function SearchInput() {
	const [inputTerm, setInputTerm] = useState("");
	const handleChange = (e) => {
		setInputTerm(e.target.value);
	};

	const handleClick = () => {
		console.log("clicked ");
	};

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			console.log("enter press");
		}
	};

	return (
		<div>
			<h1> state " {inputTerm} " </h1>
			<InputGroup>
				<Input
					placeholder={"Search..."}
					value={inputTerm}
					onChange={handleChange}
					onKeyDown={handleEnter}
				/>
				<InputGroupAddon addonType="append">
					<InputGroupText onClick={handleClick}>Search</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
