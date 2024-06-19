import { Stack } from "@mui/material";
import styles from "./style.module.css";
import UserButton from "./user";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.wrapper}>
            <h1>Library system</h1>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/books"}>Books</Link>
                <Link to={"/login"}>Login</Link>
            </Stack>
            <UserButton />
        </nav>
    )
}