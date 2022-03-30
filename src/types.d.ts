interface ITask {
	id?: number;
	jiraId: string;
  loggedTime: number;
  status: string;
}

type TaskState = {
  taskList: ITask[],
}

type TaskAction = {
  type: string,
  payload: ITask,
}

type DispatchType = (args: TaskAction) => TaskAction;