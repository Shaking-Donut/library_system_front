import styles from "./style.module.css";
import UserButton from "./user";

export default function Navbar() {
    return (
        <nav className={styles.wrapper}>
            <h1>Biblioteka</h1>
            <UserButton />
        </nav>
    )
}