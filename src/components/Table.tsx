import { useState } from "react";
import Loader from "../assets/loader";
import { StatusEnum } from "../enums/status";
import Form from "../components/Form";

type Props = {
	taskList: ITask[],
	removeTask: (arg: ITask) => void,
	editTask: (arg: ITask) => void,
};
const Table = ({ taskList, removeTask, editTask }: Props) => {
	const [loadingIndex, setLoadingIndex] = useState<number>(0);
	const [editModeIndex, setEditModeIndex] = useState<number>();
	const cancelButton = 
		<button
			className="disabled:bg-red-400 py-2 px-4 ml-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			onClick={() => {setEditModeIndex(0)}}
			disabled={loadingIndex !== 0}
		>
			Cancel
		</button>

	const removeTaskHandler = async(task: ITask) => {
		setLoadingIndex(task.id!);
		await removeTask(task);
		setLoadingIndex(0);
	}

	const editModeHandler = (task: ITask) => {
		setEditModeIndex(task.id);
	};

	const saveHandler = async (task: ITask) => {
		setLoadingIndex(task.id!);
		await editTask(task);
		setEditModeIndex(0);
		setLoadingIndex(0);
	};

	return (
		<>
			<div className="backlog flex flex-col">
				<div className="-my-2 overflow-x-auto">
					<div className="py-2 align-middle inline-block min-w-full">
						<div className="shadow mx-px border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Jira ID
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Logged
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th scope="col" className="w-[280px]"></th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{taskList.map(task => (
										<tr key={task.id}>
											{task.id === editModeIndex ? (
												<td colSpan={4}>
													<Form save={saveHandler} data={task} children={cancelButton} />
												</td>
											): (
												<>
													<td className="px-6 py-4 text-left whitespace-nowrap">
														<div className="text-sm font-medium text-gray-900">{task.jiraId}</div>
													</td>
													<td className="px-6 py-4 text-left whitespace-nowrap">
														<div className="text-sm text-gray-900">{task.loggedTime} hours</div>
													</td>
													<td className="px-6 py-4 text-left whitespace-nowrap">
														<span
															className={`px-2 text-left inline-flex text-xs leading-5 font-semibold rounded-full ${task.status === StatusEnum.Done ? "bg-green-100 text-green-800" : "text-black"}`}
														>
															{task.status}
														</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
														<button
															className="disabled:bg-indigo-400 py-2 px-4 mr-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
															onClick={() => editModeHandler(task)}
															disabled={loadingIndex !== 0}
														>
															Edit
														</button>
														<button
															className="disabled:bg-red-400 py-2 px-4 ml-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
															onClick={() => removeTaskHandler(task)}
															disabled={loadingIndex !== 0}
														>
															{task.id === loadingIndex ? (
																<>
																	<Loader />
																	Processing...
																</>
															): (
																	<>Remove</>
															)}
														</button>
													</td>
												</>
											)}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Table;