import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, InputGroupText } from "reactstrap";
import { useDispatch } from "react-redux";
import { getEvents } from "../../state/ducks/mainTable/actions";
import { req_producer } from "../../constant";

export default function SearchInput() {
	const [inputTerm, setInputTerm] = useState("");
	const handleChange = (e) => {
		setInputTerm(e.target.value);
	};

	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(getEvents(req_producer(inputTerm.trim())));
	};

	const handleEnter = (e) => {
		if (e.key === "Enter") {
			dispatch(getEvents(req_producer(inputTerm.trim())));
		}
	};

	return (
		<div className="mb-4">
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
