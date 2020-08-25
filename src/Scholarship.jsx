import React, { Component } from 'react'
import SchPic from "./Trivia-night.gif"
import Collapsible from "react-collapsible"



export default class Events extends Component {
        

    render() {
        return (
           

            <div className="Scholarship" content="width=devicewidth, initial-scale=1">
                        
                 
                <h1> Scholarship Opportunities  </h1>  

                <Collapsible trigger="LAESA Fund">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <li> Must be human </li>
                        <a href="https://www.google.com"> Click Here To Apply </a>
                    </p>
                </Collapsible>
                <Collapsible trigger="It Be Like That Fund">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <a href="https://www.google.com"> Click Here To Apply </a>
                    </p>
                </Collapsible>
                <Collapsible trigger="To The Moon & Back Scholarship">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <li> Must be human </li>
                        <a href="https://www.google.com" > Click Here To Apply </a>
                    </p>
                </Collapsible>


                {/* <h1> Internship Opportunities  </h1>

                <Collapsible trigger="LAESA Fund">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <li> Must be human </li>
                        <a href="https://www.google.com"> Click Here To Apply </a>
                    </p>
                </Collapsible>
                <Collapsible trigger="It Be Like That Fund">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <a href="https://www.google.com"> Click Here To Apply </a>
                    </p>
                </Collapsible>
                <Collapsible trigger="To The Moon & Back Scholarship">
                    <p> <li> Must be a member of LAESA </li>
                        <li> Must have at least 20 activity pioint</li>
                        <li> Must be human </li>
                        <a href="https://www.google.com"> Click Here To Apply </a>
                    </p>
                </Collapsible>
                */}
             </div>        
        )
    }
    }

