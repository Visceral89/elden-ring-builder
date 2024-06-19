import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "./components/buttons";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src={"/elden-ring-logo.png"} width={500} height={500} />
			<div className={styles.buttonContainer}>
				<Button title='Create Build' path='/' />
				<Button title='Load Build' path='/' />
			</div>
		</main>
	);
}
