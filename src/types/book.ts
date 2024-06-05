export default interface Book {
    id: number
    title: string
    author: string
    year: number
    isbn: string
    branch: number
    is_borrowed: boolean
    borrowed_by: number | null
    date_borrowed: string | null
}