import styles from "./App.module.css";

import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
	const [taskList, setTaskList] = useState<ITask[]>([]);
	const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

	const deleteTask = (id: number) => {
		setTaskList(taskList.filter((task) => task.id !== id));
	};

	const toggleModal = (display: boolean) => {
		const modal = document.getElementById("modal");

		if (display) {
			modal?.classList.add("hide");
		} else {
			modal?.classList.remove("hide");
		}
	};

	const editTask = (task: ITask) => {
		toggleModal(false);
		setTaskToUpdate(task);
	};

	const updateTask = (task: ITask) => {
		const updatedTask: ITask = {
			id: task.id,
			title: task.title,
			difficulty: task.difficulty,
		};

		const updatedItems = taskList.map((task) => {
			return task.id === updatedTask.id ? updatedTask : task;
		});

		setTaskList(updatedItems);

		toggleModal(true);
	};

	return (
		<div>
			<Modal
				children={
					<TaskForm
						btnText="Editar"
						task={taskToUpdate}
						taskList={taskList}
						setTaskList={setTaskList}
						handleUpdate={updateTask}
					/>
				}
				title={taskToUpdate?.title}
			/>

			<Header />

			<main className={styles.main}>
				<div>
					<h2>O que você vai fazer?</h2>
					<TaskForm
						btnText="Criar Tarefa"
						taskList={taskList}
						setTaskList={setTaskList}
					/>
				</div>

				<div>
					<h2>Suas tarefas</h2>
					<TaskList
						taskList={taskList}
						handleDelete={deleteTask}
						handleEditTask={editTask}
					/>
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default App;
