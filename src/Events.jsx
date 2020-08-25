import React, { Component } from 'react'
import TriviaNight from "./Trivia-night.gif"
export default class Events extends Component {
    render() {
        return (
            <div className="Events">
                <h1>Upcoming Events</h1>
                <div className="flexColumn">
                    <img src={TriviaNight} className="event-picture" />
                    <ul>
                        <h2>KAHOOT</h2>
                        <li>Date: INSERT DATE HERE</li>
                        {/* needs a date for events */}
                        <li> Location: INSERT LOCATION HERE</li>
                        <li>Points: INSERT POINT HERE</li>
                        <li> Description: INSERT DESCRIPTION HERE </li>
                    </ul>
                </div>
            </div>
        )
    }
}
