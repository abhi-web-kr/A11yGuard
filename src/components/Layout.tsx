"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const hideNavbar = pathname === "/login" || pathname === "/register";

    return (
        <>
            {!hideNavbar && <Navbar />}
            {children}
            {!hideNavbar && <Footer />}
        </>
    );
};

export default Layout;
