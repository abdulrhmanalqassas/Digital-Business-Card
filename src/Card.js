import React from "react";
import Head from "./Head";
import ButtContaner from "./ButtContaner";
import Main from "./Main";
import Footer from "./Footer";


export default function Card (){
    return(
       <div className="Card">
           <Head/>
           <ButtContaner/>
           <Main/>
           <Footer/>
           
       </div>
    )
}