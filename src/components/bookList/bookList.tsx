import { Book } from "../../types"
import BookListElement from "./bookListElement"

interface props {
    books: Book[]
}

export default function BookList(props: props) {
    return (
        props.books.map((book, index) => <BookListElement book={book} key={index} />)
    )
}