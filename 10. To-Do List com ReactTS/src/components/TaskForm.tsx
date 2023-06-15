import styles from "./TaskForm.module.css";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ITask } from "../interfaces/Task";

type Props = {
	btnText: string;
	taskList: ITask[];
	setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
	task?: ITask | null;
	handleUpdate?(task: ITask): void;
};

const TaskForm = ({
	btnText,
	taskList,
	setTaskList,
	task,
	handleUpdate,
}: Props) => {
	const [id, setId] = useState<number>(0);
	const [title, setTitle] = useState<string>("");
	const [difficulty, setDifficulty] = useState<number>(0);

	useEffect(() => {
		if (task) {
			setId(task.id);
			setTitle(task.title);
			setDifficulty(task.difficulty);
		}
	}, [task]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "title") {
			setTitle(e.target.value);
		}

		if (e.target.name === "difficulty") {
			setDifficulty(parseInt(e.target.value));
		}
	};

	const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!title) {
			alert("Preencha todos os campos");
			return;
		}

		if (handleUpdate) {
			handleUpdate({ id, title, difficulty });
		} else {
			const id = Math.floor(Math.random() * 1000) + 1;

			const newTask: ITask = { id, title, difficulty };

			setTaskList?.([...taskList, newTask]);

			setTitle("");
			setDifficulty(0);
		}
	};

	return (
		<form className={styles.form} onSubmit={addTaskHandler}>
			<div className={styles.input_container}>
				<label htmlFor="title">Título:</label>
				<input
					type="text"
					name="title"
					placeholder="Título da Tarefa"
					onChange={handleChange}
					value={title}
				/>
			</div>

			<div className={styles.input_container}>
				<label htmlFor="difficulty">Dificuldade:</label>
				<input
					type="number"
					name="difficulty"
					placeholder="Dificuldade da Tarefa"
					onChange={handleChange}
					value={difficulty.toString()}
				/>
			</div>

			<input type="submit" value={btnText} />
		</form>
	);
};

export default TaskForm;
