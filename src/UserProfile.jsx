import React, { Component } from 'react'
import Kermit from "./Kermit.jpeg"
export default class UserProfile extends Component {
    render() {
        return (
            <div className="UserProfile">
                <img src={Kermit} />
                <h2>Kermit the Frog</h2>
                <ul>
                    <li>Points: 420 </li>
                    <li> Membership: On House Arrest </li>
                    <li>Position: Has The High Ground </li> {/*hide if no position*/}
                    <p>BIO: Please Be My Friend </p>
                </ul>
            </div>
        )
    }
}
