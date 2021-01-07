import React, { Component } from 'react'
import TriviaNight from "./Trivia-night.gif"
export default class Events extends Component {
    render() {
        return (
            <div className="Events">
                {/* <h1>Upcoming Events</h1> */}
                <div className="flexColumn">
                    <img src={TriviaNight} className="event-picture" />
                    <div>
                        <h5>KAHOOT</h5>
                        <ul>
                            <li className="lists">Date: INSERT DATE HERE</li>
                            {/* needs a date for events */}
                            <li className="lists"> Location: INSERT LOCATION HERE</li>
                            <li className="lists"> Points: INSERT POINT HERE</li>
                            <li className="lists"> Description: INSERT DESCRIPTION HERE </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
