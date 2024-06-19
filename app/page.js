import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<Image src={"/elden-ring-logo.png"} width={500} height={500} />
		</main>
	);
}
