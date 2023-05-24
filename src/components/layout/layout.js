import React from "react";
import Footer from "../sections/Footer";
import { GlobalStyle } from "../styles/GlobalStyle";
import Header from "./Header";
import "./layout.css";

function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
