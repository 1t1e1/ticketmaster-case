import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { req_for_id } from "../../constant";
import { getEvents } from "../../state/ducks/detailData/actions";
import { EventInfo, DetailImage } from "../../components";
import { Row, Col } from "reactstrap";

export default function DetailPage() {
	let { ticketId } = useParams();
	const { isLoading, data, errorMessage, imagesrc } = useSelector((state) => ({
		isLoading: state.detailData.isLoading,
		errorMessage: state.detailData.errorMessage,
		data: state.detailData.data,
		imagesrc: state.detailData.imagesrc,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents(req_for_id(ticketId)));
	}, []);

	if (isLoading) return <div> Loading in detail page </div>;
	if (errorMessage) return <div> {errorMessage}</div>;

	const { name, dates, priceRanges, accessibility } = { ...data };

	console.log("name, dates", name, dates);
	console.log(data);
	return (
		<Row>
			<Col md="7">
				{imagesrc && <DetailImage imagesrc={imagesrc}></DetailImage>}
			</Col>
			<Col md="5">
				<EventInfo
					name={name}
					dates={dates}
					priceRanges={priceRanges}
					accessibility={accessibility}
				></EventInfo>
			</Col>
		</Row>
	);
}
