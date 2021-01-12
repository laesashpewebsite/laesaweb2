import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form>

                    <label>Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username-box"
                    />
                    <labe>password</labe>
                    <input
                    type="password"
                    />
                </form>
            </div>
        );
    }
}

export default Login;