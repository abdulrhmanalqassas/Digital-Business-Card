import React from "react";
import { PureComponent } from 'react';
import LinkedInButt from "./LinkedButt";
export default class  ButtContaner extends PureComponent{
    render(){
        return(
            <div className="Butt-contaner">
                <LinkedInButt/>
                <LinkedInButt/>
            </div>
         )
    }
   
}