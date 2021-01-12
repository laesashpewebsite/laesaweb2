import React, { Component } from 'react'
// import SchPic from "./Trivia-night.gif"
import Collapsible from "react-collapsible"
import Axios from "axios"


export default class Events extends Component {
    
    _isMounted= false;
    constructor(props){
        super(props);
        this.state={
            scholarships:[],
        }
        this.getScholarships= this.getScholarships.bind(this)
    }
    componentDidMount=()=>{
        this._isMounted= true;
        // console.log("hello")
        this.getScholarships();
    }
    componentWillUnmount(){
        this._isMounted=false
    }
    getScholarships=()=>{
        if(this._isMounted){
        Axios
        .get("https://laesa-backend.herokuapp.com/api/scholarships")
        .then(res=>{
            this.setState({
                scholarships:res.data
            })
            
        })
        .catch(err=>console.error(err))}
    }

    render() {
        return (
           

            <div className="Scholarship" content="width=devicewidth, initial-scale=1">
                <h3> Scholarship Opportunities  </h3>  
                <ul className="Scholarship-titles">
                    <li> 
                        
                        <Collapsible trigger="LAESA Fund">
                             
                                 <ul> 
                                    <li> Must be a member of LAESA </li>
                                    <li> Must have at least 20 activity pioint</li>
                                    <li> Must be human </li>
                                    <li> 
                                        <a href="https://www.google.com"> Click Here To Apply </a>
                                    </li>
                                </ul>
                            
                        </Collapsible>
                    </li>
                    <li>
                        <Collapsible trigger="It Be Like That Fund">
                            
                        </Collapsible>
                    </li> 
                    <li>
                        <Collapsible trigger="To The Moon & Back Scholarship">
                           
                       </Collapsible>   
                    </li>
                </ul>
                <ul className="Scholarship-titles">
                    {
                        this.state.scholarships.map((scholarship, index) =>(
                            <li key={index}>
                                <Collapsible trigger={scholarship.title}>
                                    <ul>
                                        <li>Description: {scholarship.description}</li>
                                        <li>Deadline: {scholarship.deadline}</li>
                                    </ul>
                                </Collapsible>   
                            </li>
                        ))
                    }
                </ul>

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

