import React from "react";
import Head from "./Head";
import ButtContaner from "./ButtContaner";
import Main from "./Main";
import Footer from "./Footer";
import { PureComponent } from 'react';


export default class Card extends PureComponent {
    render(){
        return(
            <div className="Card">
                <Head/>
                <ButtContaner/>
                <Main/>
                <Footer/>
                
            </div>
         )
    }
    
}