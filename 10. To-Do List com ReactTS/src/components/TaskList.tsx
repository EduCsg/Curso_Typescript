import styles from "./TaskList.module.css";

import { ITask } from "../interfaces/Task";

type Props = {
	taskList: ITask[];
	handleDelete(id: number): void;
	handleEditTask(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEditTask }: Props) => {
	return (
		<>
			{taskList.length > 0 ? (
				taskList.map((task) => {
					return (
						<div className={styles.task} key={task.id}>
							<div className={styles.details}>
								<h4>{task.title}</h4>
								<p>Dificuldade: {task.difficulty}</p>
							</div>
							<div className={styles.actions}>
								<i
									onClick={() => handleEditTask(task)}
									className="bi bi-pencil"
								></i>
								<i
									onClick={() => handleDelete(task.id)}
									className="bi bi-trash"
								></i>
							</div>
						</div>
					);
				})
			) : (
				<p>Não há tarefas cadastradas!</p>
			)}
		</>
	);
};

export default TaskList;
