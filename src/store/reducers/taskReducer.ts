import * as actionTypes from "../actionTypes";

const initialState: TaskState = {
	taskList: [
		{
			id: 1000,
			jiraId: "KIWINGS-1000",
			loggedTime: 4,
			status: "Unresolved",
		},
		{
			id: 1001,
			jiraId: "KIWINGS-1001",
			loggedTime: 6,
			status: "Done",
		},
		{
			id: 1002,
			jiraId: "KIWINGS-1002",
			loggedTime: 14,
			status: "Done",
		},
		{
			id: 1003,
			jiraId: "KIWINGS-1003",
			loggedTime: 9,
			status: "In Progress",
		},
	]
};

const taskReducer = (
	state: TaskState = initialState,
	action: TaskAction,
): TaskState => {
	// let ret: TaskState = {
	// 	...state,
		
	// };
	switch (action.type) {
		case actionTypes.ADD_TASK:
			const newTask: ITask = {
				id: Math.floor(Math.random() * (10000 - 1004 + 1)) + 1004,
				jiraId: action.payload.jiraId,
				loggedTime: action.payload.loggedTime,
				status: action.payload.status,
			};
			return {
				...state,
				taskList: [...state.taskList, newTask],
			};
		
		case actionTypes.EDIT_TASK:
			const updatedList: ITask[] = state.taskList.map((i: ITask) => {
				if (i.id === action.payload.id) {
					i = action.payload;
				}
				return i;
			});
			return {
				...state,
				taskList: updatedList,
			};

		case actionTypes.REMOVE_TASK:
			const removedFromlist: ITask[] = state.taskList.filter((i: ITask) => {
				return i.id !== action.payload.id;
			});
			return {
				...state,
				taskList: removedFromlist,
			};

		default:
			return state;
	}
};

export default taskReducer;