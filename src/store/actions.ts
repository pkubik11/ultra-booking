import * as actionTypes from "./actionTypes";


export const addTask = (payload: ITask) => {
	const action: TaskAction = {
		type: actionTypes.ADD_TASK,
		payload,
	};

	return fakeRequest(action);
};

export const editTask = (payload: ITask) => {
	const action: TaskAction = {
		type: actionTypes.EDIT_TASK,
		payload,
	};

	return fakeRequest(action);
};

export const removeTask = (payload: ITask) => {
	const action: TaskAction = {
		type: actionTypes.REMOVE_TASK,
		payload,
	};
	return fakeRequest(action);
};

export function fakeRequest(action: TaskAction) {
	return async (dispatch: DispatchType) => {
		await new Promise((resolve) => setTimeout(resolve, 5500));
		dispatch(action);
	}
}