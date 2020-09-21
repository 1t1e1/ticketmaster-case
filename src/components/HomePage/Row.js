import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Row({ data, index }) {
	const { id, name, images } = { ...data };

	const imageSrc = images.find(
		(image) => image.ratio == "16_9" && image.width == 100
	).url;

	return (
		<tr>
			<th className="align-middle" scope="row">
				{index}
			</th>

			<td className="align-middle">
				<img className="rounded" src={imageSrc} />
			</td>

			<td className="align-middle">{name}</td>

			<td className="align-middle">
				<Button tag={Link} to={`/ticket-detail/${id}`} color="info">
					Detail
				</Button>
			</td>
		</tr>
	);
}
