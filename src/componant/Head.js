import React from "react";
import {PureComponent} from "react";
import Info from "./Info";

function Myimg (){
   return (
    <img src="./myImg.png" alt="" />
   
   )
}
export default class  Head extends PureComponent{
    render (){
         return(
            <div>
                <Myimg/>
                <Info/>
            </div>
    )
    }
   
}