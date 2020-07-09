/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class LoginView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LoginController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LoginView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== LoginView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/laesa-shpe.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <header id="nav" className="af-class-sticky-nav-2">
              <div data-collapse="medium" data-animation="default" data-duration={400} data-doc-height={1} role="banner" className="af-class-nav w-nav">
                <div className="af-class-nav-inner">
                  <div className="af-class-nav-logo-wrap"><a href="#" className="af-class-brand w-nav-brand"><img src="images/LAESA_LOGO.png" width={175} alt className="af-class-image-logo" /></a></div>
                  <div className="af-class-nav-menu-wrap">
                    <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">About</a><a href="members.html" className="af-class-nav-link w-nav-link">Members</a><a href="pced.html" id="eboard" className="af-class-nav-link af-class-eboard-link w-nav-link">Eboard</a><a href="events/events.html" className="af-class-nav-link w-nav-link">Events</a><a href="calendar.html" className="af-class-nav-link w-nav-link">Calendar</a><a href="login.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">Login</a></nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-icon w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" laesa-socket="Login" className="af-class-form-4"><label htmlFor="Username">Username</label><input type="email" className="w-input" maxLength={256} name="Username" data-name="Username" placeholder id="Username" required /><label htmlFor="email">Password</label><input type="password" className="w-input" maxLength={256} name="email" data-name="Email" placeholder id="password" required /><input type="submit" defaultValue="Login" data-wait="Please wait..." className="w-button" /></form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div><a href="make-account.html" className="af-class-button-2 w-button">Make Account</a>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default LoginView

/* eslint-enable */