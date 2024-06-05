import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { WelcomePage, LoginPage } from "./pages";
import { GeneralLayout } from "./layouts";

const router = createBrowserRouter([
    {
        element: <GeneralLayout />,
        children: [
            { path: "/", element: <WelcomePage /> },
            { path: "/login", element: <LoginPage /> },
        ]
    },
])

export default function Router() {
    return <RouterProvider router={router} />
}