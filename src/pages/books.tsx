import { styled } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Book } from "../types";
import { useEffect, useState } from "react";

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
}))

const columns: GridColDef<(Book[])[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'branch', headerName: 'Branch', width: 150 },
    { field: 'is_borrowed', headerName: 'Is Borrowed', width: 150 },
    { field: 'date_borrowed', headerName: 'Date Borrowed', width: 150 },
    {
        field: 'borrowed_for', headerName: 'Borrowed For', width: 150, valueGetter: (_, row) => {
            if (!row.date_borrowed) return null;
            const borrowDate = new Date(row.date_borrowed);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - borrowDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const diffMonths = Math.floor(diffDays / 30);
            const diffDaysInMonth = diffDays % 30;
            return `${diffMonths ? `${diffMonths}m ` : ""}${diffDaysInMonth}d`;
        }
    },
    { field: 'borrowed_by', headerName: 'Borrowed By', width: 150 },
]

export default function BooksPage() {
    const [rows, setRows] = useState<Book[]>([]);

    useEffect(() => {
        fetch("http://localhost:62626/books")
            .then(response => response.json())
            .then(data => setRows(data))
    }, [])

    return (
        <Wrapper>
            <h1>Books Page</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Wrapper>
    )
}