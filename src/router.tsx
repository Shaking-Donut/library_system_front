import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { WelcomePage, LoginPage, BooksPage } from "./pages";
import { GeneralLayout } from "./layouts";

const router = createBrowserRouter([
    {
        element: <GeneralLayout />,
        children: [
            { path: "/", element: <WelcomePage /> },
            { path: "/books", element: <BooksPage /> },
            { path: "/login", element: <LoginPage /> },
        ]
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}