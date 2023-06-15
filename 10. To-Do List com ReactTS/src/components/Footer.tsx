import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>Feito com React + TS &copy; {new Date().getFullYear()}</span>
			<p>
				Feito por <a href="https://github.com/EduCsg">Eduardo Casagrande</a>
			</p>
		</footer>
	);
};

export default Footer;
