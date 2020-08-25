import React, { Component } from 'react';
import Events from "./Events";
import Points from './Points';
import Scholarhip from './Scholarship';

export default class Anemeties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            control: 1
        }
        this.pageArea = this.pageArea.bind(this)

    }
    NavOnClick = (val) => {
        this.setState({ control: val })
    }
    pageArea = () => {
        if (this.state.control === 1) {
            return <Scholarhip />
        }
        if (this.state.control === 2) {
            return <Events />
        } if (this.state.control === 3) {
            return <Points />
        }
    }

    render() {
        return (
            <div className="Anemeties">
                {/* Nav Bar */}
                <button onClick={() => this.NavOnClick(1)}>Scholarship</button>
                <button onClick={() => this.NavOnClick(2)}>Events</button>
                <button onClick={() => this.NavOnClick(3)}>Points</button>
                {this.pageArea()}
            </div>
        )
    }
}
