import React, { Component } from 'react'
import Kermit from "./Kermit.jpeg"
export default class UserProfile extends Component {
    render() {
        return (
            <div className="UserProfile">
                <img src={Kermit} />
                <h2>Kermit the Frog</h2>
                <ul>
                    <li>Points: </li>
                    <li> Membership: </li>
                    <li>Position: </li> {/*hide if no position*/}
                    <p>BIO: </p>
                </ul>
            </div>
        )
    }
}
