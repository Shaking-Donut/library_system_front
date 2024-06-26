import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function GeneralLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}