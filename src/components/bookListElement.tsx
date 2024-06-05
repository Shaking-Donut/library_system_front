import { Book } from "../types";

interface props {
    book: Book
}

export default function BookListElement(props: props) {
    return (
        <div>
            <h2>{props.book.title}</h2>
            <p>Author: {props.book.author}</p>
            <p>Year: {props.book.year}</p>
            <p>ISBN: {props.book.isbn}</p>
            <p>Branch: {props.book.branch}</p>
            <p>Is borrowed: {props.book.is_borrowed ? "Yes" : "No"}</p>
            {props.book.is_borrowed && (
                <>
                    <p>Borrowed by: {props.book.borrowed_by}</p>
                    <p>Date borrowed: {props.book.date_borrowed}</p>
                </>
            )}
        </div>
    )
}