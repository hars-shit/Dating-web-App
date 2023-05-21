
import React from "react";

import CardPerPerson from "./CardPerPerson";
import Header from "./Header";
import Stories from "./Stories";
import Footer from "./Footer";


const Home=()=>{
    
    return(
        <>
    <Header />
    <Stories />
        <CardPerPerson />
        <Footer />
        </>
    )
}
export default Home;