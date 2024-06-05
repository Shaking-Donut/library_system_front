import BookList from "../components/bookList";

export default function BooksPage() {
    return (
        <div>
            <h1>Books Page</h1>
            <BookList books={[{
                "id": 32,
                "title": "1984",
                "author": "George Orwell",
                "year": 1949,
                "isbn": "9780451524935",
                "branch": 1,
                "is_borrowed": true,
                "date_borrowed": "2024-05-15T00:00:00",
                "borrowed_by": 10
            }]} />
        </div>
    )
}