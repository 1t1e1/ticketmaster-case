import React, { useState } from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

export default function TicketBuy(props) {
	const [min, setMin] = useState(props.min || 0);
	const [max, setMax] = useState(props.max || 10);
	const [count, setCount] = useState(
		props.value < props.min ? props.min : props.value || 1
	);

	const handleChange = (e) => {
		let new_value = e.target.value;

		if (new_value === "") {
			setCount(min);
		} else if ((new_value > max && max !== -1) || new_value < min) {
			return;
		} else if (typeof new_value != "number") {
			const parsed = parseInt(new_value, 10); // try to parse the number
			if (isNaN(parsed)) {
				setCount(min);
			} else {
				setCount(parsed);
			}
		}
	};

	const handleClick = (i) => {
		return () => {
			if (i === 1 && max > count) setCount(count + 1);
			if (i === -1 && min < count) setCount(count - 1);
		};
	};

	return (
		<div>
			<InputGroup className="">
				<InputGroupAddon addonType="prepend">
					<Button color="info" onClick={handleClick(-1)}>
						-
					</Button>
				</InputGroupAddon>
				<Input value={count} onChange={handleChange} />
				<InputGroupAddon addonType="append" className="my-input pr-4 ">
					<Button color="info" onClick={handleClick(1)}>
						+
					</Button>
				</InputGroupAddon>
				<InputGroupAddon className="w-25 ml-3" addonType="append">
					Buy
				</InputGroupAddon>
			</InputGroup>
			{props.minprice && props.maxprice && (
				<div className="mt-3">
					Price Range: $ {count * props.minprice} - $ {count * props.maxprice}
				</div>
			)}
		</div>
	);
}
