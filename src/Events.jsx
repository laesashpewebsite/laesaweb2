import React, { Component } from 'react'
import TriviaNight from "./Trivia-night.gif"
import Axios from "axios"
export default class Events extends Component {
    constructor(props){
        super(props);
        this.state={
            events :[]
        }
    }
    componentDidMount(){
        
        this.getEvents();
    }
    getEvents=()=>{
        console.log("hi");
        Axios
        .get("https://laesa-backend.herokuapp.com/api/events")
        .then(res=>{
            console.log("hi",res.data, res)
            this.setState({
                events:res.data
            })
        })
        .catch(err=>{console.error(err);})
    }
    render() {

        return (
            <div className="Events">
                {/* <h1>Upcoming Events</h1> */}
                <div className="flexColumn">
                    <img src={TriviaNight} className="event-picture" alt="event"/>
                    <div>
                        <h5>KAHOOT</h5>
                        <ul>
                            <li className="lists">Date: INSERT DATE HERE</li>
                            {/* needs a date for events */}
                            <li className="lists"> Location: INSERT LOCATION HERE</li>
                            <li className="lists"> Points: INSERT POINT HERE</li>
                            <li className="lists"> Description: INSERT DESCRIPTION HERE </li>
                        </ul>
                        <ul>
                            {this.state.events.map((res,key)=>(
                                <li key={key}>

                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
