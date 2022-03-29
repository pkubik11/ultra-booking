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
	return (dispatch: DispatchType) => {
		setTimeout(() => {
			dispatch(action);
		}, 350);
	};
}