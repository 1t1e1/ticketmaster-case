import React from "react";
import TicketBuy from "./TicketBuy";
import { Button } from "reactstrap";

export default function EventInfo(props) {
	const dates = props.dates;
	const priceRanges = props.priceRanges;
	const accessibility = props.accessibility;
	return (
		<div className="mr-3">
			<h3 className="my-3 text-center">Event info</h3>

			<h5>
				Name : <strong>{props.name}</strong>
			</h5>

			{dates && (
				<p>
					Start at: {dates.start.localTime} in {dates.start.localDate}
				</p>
			)}
			{priceRanges ? (
				<div className="my-5 mx-4">
					<TicketBuy
						max={accessibility.ticketLimit}
						minprice={priceRanges[0].min}
						maxprice={priceRanges[0].max}
					></TicketBuy>
				</div>
			) : (
				<div className="my-5 mx-4">
					<Button color="light"> Buy Ticket</Button>
				</div>
			)}
		</div>
	);
}
