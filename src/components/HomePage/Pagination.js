import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { req_producer_pagi } from "../../constant";
import { getEvents } from "../../state/ducks/mainTable/actions";

const PaginationComp = ({ pagilong }) => {
	const [pageArray, setpageArray] = useState([]);
	const { page, links } = useSelector((state) => ({
		page: state.mainTable.page,
		links: state.mainTable.links,
	}));

	const { size, totalElements, totalPages, number } = page;
	const { first, last, next, self } = links;
	const dispatch = useDispatch();

	useEffect(() => {
		// width okuyup responsive yapilabilir.

		// it must be change
		const pagelong = pagilong - 1;
		const tempArray = [];
		let tempConst = 0;

		for (let i = number - pagelong; i <= number + pagelong + 2; i++) {
			if (number - pagelong < 1) {
				tempConst = Math.abs(number - pagelong) + 1;
			} else if (totalPages - number < pagelong + 2) {
				tempConst = -(pagelong - (totalPages - number) + 2);
			}

			tempArray.push(tempConst + i);
		}

		setpageArray(tempArray);

		return () => {};
	}, [number]);

	const handleClick = (num) => {
		if (num === "last") {
			dispatch(getEvents(req_producer_pagi(last.href)));
			console.log("last ", req_producer_pagi(last.href));
		} else if (num === "first") {
			dispatch(getEvents(req_producer_pagi(first.href, 0)));
			console.log("first ", req_producer_pagi(first.href, 0));
		} else {
			dispatch(getEvents(req_producer_pagi(first.href, num - 1)));
			console.log(num, req_producer_pagi(first.href, num));
		}
	};

	return (
		<>
			<div>
				<p>
					Pagination infos: size:{size}, totalElements:{totalElements},
					totalPages:{totalPages}, number:{number},
				</p>
			</div>
			<Pagination aria-label="Page navigation example">
				<PaginationItem disabled={0 === number}>
					<PaginationLink first href="#" onClick={() => handleClick("first")} />
				</PaginationItem>
				<PaginationItem disabled={0 === number}>
					<PaginationLink
						previous
						href="#"
						onClick={() => handleClick(number)}
					/>
				</PaginationItem>

				{pageArray.map((item) => (
					<PagiItem
						key={item}
						text={item}
						active={item === number + 1}
						clickHandle={() => {
							if (item !== number + 1) handleClick(item);
						}}
					></PagiItem>
				))}
				<PaginationItem disabled={totalPages === number}>
					<PaginationLink
						next
						href="#"
						onClick={() => handleClick(number + 2)}
					/>
				</PaginationItem>
				<PaginationItem disabled={totalPages === number}>
					<PaginationLink last href="#" onClick={() => handleClick("last")} />
				</PaginationItem>
			</Pagination>
		</>
	);
};

export default PaginationComp;

function PagiItem({ text, active, clickHandle }) {
	return (
		<PaginationItem active={active}>
			<PaginationLink onClick={(e) => clickHandle(e.target.value)} href="#">
				{text}
			</PaginationLink>
		</PaginationItem>
	);
}
