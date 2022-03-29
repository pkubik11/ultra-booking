import React from "react";
import Form from "../components/Form";

const List = () => {

	return (
		<>
			<div className="px-4 py-5">
				<section className="py-5">
					<h1 className="text-left">Create new item</h1>
					<Form />
				</section>
				<section className="py-5">
					<h1 className="text-left">List of items</h1>
				</section>
			</div>
		</>
	);
}
export default List;