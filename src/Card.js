import React from "react";
import Head from "./Head";
import Info from "./Info";
import LinkedInButt from "./LinkedButt";
export default function Card (){
    return(
       <div className="Card">
          
           <Head/>
           <Info/>
           <LinkedInButt/>
       </div>
    )
}