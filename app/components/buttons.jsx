import styles from "../styles/buttons.module.scss";
import Link from "next/link";

function Button({ title, path, className }) {
	return (
		<Link href={path}>
			<div className={`${styles.button} ${className || ""}`}>{title}</div>
		</Link>
	);
}

export { Button };
