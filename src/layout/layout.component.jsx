import { Fragment } from "react";
import React from 'react';
import Header from "./header/header.component";
import Footer from "./footer/footer.component";

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
              <main>{props.children}</main>
            <Footer />
        </Fragment>
    )
};

export default Layout;