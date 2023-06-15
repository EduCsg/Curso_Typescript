import styles from "./Modal.module.css";

type Props = {
	children: React.ReactNode;
	title: string | undefined;
};

const Modal = ({ children, title }: Props) => {
	const closeModal = (): void => {
		const modal = document.getElementById("modal");

		modal?.classList.add("hide");
	};

	return (
		<div id="modal" className="hide">
			<div className={styles.fade} onClick={closeModal}></div>
			<div className={styles.modal}>
				<h2>Editar tarefa {title}</h2>
				{children}
			</div>
		</div>
	);
};

export default Modal;
