import React, { useState, useEffect } from "react";
import Loader from "../assets/loader";
import { StatusEnum } from "../enums/status";

type Props = {
	save: (arg: ITask) => void;
	data?: ITask;
	children?: JSX.Element;
};

const Form = ({ save, data, children }: Props) => {
	const [jiraId, setJiraId] = useState(data?.jiraId || "");
	const [loggedTime, setLoggedTime] = useState<number>(data?.loggedTime || 0);
	const [status, setStatus] = useState<string>(data?.status || StatusEnum.Unresolved);
	
	const [disabled, setDisabled] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (jiraId && loggedTime) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [jiraId, loggedTime]);

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;
		setStatus(value);
	};
	const loggedTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const re = /^[0-9\b]+$/;
		
		if (event.target.value === "" || re.test(event.target.value)) {
			const value = +event.target.value;
			setLoggedTime(value);
		}
	};
	const jiraIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setJiraId(value);
	};
	const saveHandler = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		setLoading(true);

		await save({ jiraId, loggedTime, status, ...(data && {id: data.id}) });
		setJiraId("");
		setLoggedTime(0);
		setStatus(StatusEnum.Unresolved);
		setLoading(false);
	};

	return (
		<>
			<div className="form mt-10 sm:mt-0">
				<div className="mt-5 md:mt-0 md:col-span-2">
					<form onSubmit={saveHandler}>
						<div className="shadow overflow-hidden sm:rounded-md">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									
									<div className="col-span-6 sm:col-span-2">
										<label htmlFor="jira-id" className="block text-left text-sm font-medium text-gray-700">
											Jira ID	
										</label>
										<input
											type="text"
											value={jiraId}
											name="jira-id"
											id="jira-id"
											className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											onChange={jiraIdChange}
										/>
									</div>

									<div className="col-span-6 sm:col-span-2">
										<label htmlFor="logged-time" className="block text-left text-sm font-medium text-gray-700">
											Logged time in hours
										</label>
										<input
											type="text"
											value={loggedTime}
											name="logged-time"
											id="logged-time"
											className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											onChange={loggedTimeChange}
										/>
									</div>

									<div className="col-span-6 sm:col-span-2">
										<label htmlFor="status" className="block text-left text-sm font-medium text-gray-700">
											Status
										</label>
										<select
											name="status"
											id="status"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
											onChange={selectChange}
										>
											<option value={StatusEnum.Unresolved}>{ StatusEnum.Unresolved }</option>
											<option value={StatusEnum.Done}>{ StatusEnum.Done }</option>
											<option value={StatusEnum.InProgress}>{ StatusEnum.InProgress }</option>
										</select>
									</div>

								</div>
							</div>
							<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									type="submit"
									className="disabled:bg-indigo-400 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									disabled={disabled || loading}
								>
									{loading ? (
										<>
											<Loader />
											Processing...
										</>
									): (
											<>Save</>
									)}
								</button>
								{children}
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Form;