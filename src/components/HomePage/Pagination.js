import React from "react";

export default function Pagination({
	size,
	totalElements,
	totalPages,
	number,
}) {
	return (
		<div>
			<p>Pagination infos: page is</p>
			<p>
				size, {size}, totalElements,{totalElements}, totalPages, {totalPages},
				number, {number},
			</p>
		</div>
	);
}
