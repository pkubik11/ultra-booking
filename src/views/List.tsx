import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import Form from "../components/Form";
import Table from "../components/Table";
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
					<Form addTask={addTask} />
				</section>
				<section className="py-5">
					<h1 className="text-left">Backlog</h1>
					<Table taskList={taskList} removeTask={removeTask} />
				</section>
			</div>
		</>
	);
}
export default List;