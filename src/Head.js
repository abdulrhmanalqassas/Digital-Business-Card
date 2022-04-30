import React from "react";
import Info from "./Info";

function Myimg (){
   return (
    <img src="./myImg.png" alt="" />
   )
}
export default function Head(){
    return(
       
        <div>
        <Myimg/>
        <Info/>
        </div>
    )
}