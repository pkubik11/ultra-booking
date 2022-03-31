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
			<section className="py-5">
				<h1 className="text-left text-3xl">Create new task</h1>
				<Form save={addTask} />
			</section>
			<section className="py-5">
				<h1 className="text-left text-3xl">List</h1>
				<Table taskList={taskList} removeTask={removeTask} editTask={editTask} />
			</section>
		</>
	);
}
export default List;