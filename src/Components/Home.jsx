
import React from "react";

import CardPerPerson from "./CardPerPerson";
import Footer from "./Footer";
import Header from "./Header";

const Home=()=>{
    // useEffect(()=>{
    //     localStorage.clear()
    // },[])
    return(
        <>
        <Header />
        
       <Footer />
        <CardPerPerson />
        </>
    )
}
export default Home;