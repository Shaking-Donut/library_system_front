import { Book } from "../../types";
import styles from "./style.module.css"

interface props {
    book: Book
}

export default function BookListElement(props: props) {
    const { title, author, year, branch, is_borrowed } = props.book;

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title} >{title} <span className={styles.subtitle} >by: {author}</span></h2>
            <p>Year: {year}</p>
            <p>Branch: {branch}</p>
            <p>Is borrowed: {is_borrowed ? "Yes" : "No"}</p>
        </div>
    )
}