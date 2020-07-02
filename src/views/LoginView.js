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
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="w-nav">
              <div className="w-container"><a href="#" className="w-nav-brand" />
                <nav role="navigation" className="w-nav-menu"><a href="#" className="w-nav-link">Home</a><a href="#" className="w-nav-link">About</a><a href="#" className="w-nav-link">Contact</a></nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form-4"><label htmlFor="name">Email</label><input type="email" className="w-input" maxLength={256} name="name" data-name="Name" placeholder id="email" /><label htmlFor="email">Password</label><input type="password" className="w-input" maxLength={256} name="email" data-name="Email" placeholder id="password" required /><input type="submit" defaultValue="Login" data-wait="Please wait..." className="w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default LoginView

/* eslint-enable */