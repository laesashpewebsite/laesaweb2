import React, { Component } from 'react'

export default class Points extends Component {
    render() {
        return (
            <div>
                <div className="Points">
                    <h1>Point Overview</h1>
                    <div className="flexColumn">
                        
                        <ul>
                            <h2>Leaderboard</h2>
                            <li>Date: INSERT DATE HERE</li>                           
                            <li> Location: INSERT LOCATION HERE</li>
                            <li>Points: INSERT POINT HERE</li>
                            <li> Description: INSERT DESCRIPTION HERE </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
