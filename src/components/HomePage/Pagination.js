import React from "react";
import { useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComp = () => {
	const { page } = useSelector((state) => ({
		page: state.mainTable.page,
	}));

	const { size, totalElements, totalPages, number } = page;

	const paginationLong = 9;
	const pageArray = [];
	for (let i = 1; i <= paginationLong; i++) pageArray.push(i);

	const handleClick = (num) => {
		if (num === "last") {
			console.log("last page will load");
		} else if (num === "first") {
			console.log("first page will load");
		} else {
			console.log(`${num}. page will load`);
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
						onClick={() => handleClick(number - 1)}
					/>
				</PaginationItem>

				{pageArray.map(
					(item) =>
						Math.abs(item - number) < paginationLong && (
							<PagiItem
								key={item}
								text={item}
								active={item === number + 1}
								clickHandle={() => {
									handleClick(item);
								}}
							></PagiItem>
						)
				)}
				<PaginationItem disabled={totalPages === number}>
					<PaginationLink
						next
						href="#"
						onClick={() => handleClick(number + 1)}
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
