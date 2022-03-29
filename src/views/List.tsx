import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "../components/Form";
import { RootState } from "../store/reducers";
import * as actionsCreators from "../store/actions";

const List = () => {
	const dispatch = useDispatch();
	const { addTask, editTask, removeTask } = bindActionCreators(actionsCreators, dispatch);
	const { taskList } = useSelector((state: RootState) => state.taskReducer);

	return (
		<>
			<div className="px-4 py-5">
				<section className="py-5">
					<h1 className="text-left">Create new task</h1>
					<Form />
				</section>
				<section className="py-5">
					<h1 className="text-left">Backlog</h1>
					{taskList.map((item) => (
						<article
							key={item.id}
						>
							<span>{item.jiraId}</span>
							<span>{item.loggedTime}</span>
							<span>{item.status}</span>
							<button
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={() => removeTask(item)}>
									Remove
							</button>
						</article>
					))}
				</section>
			</div>
		</>
	);
}
export default List;