/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class RegisterView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RegisterController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RegisterView

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
    const proxies = Controller !== RegisterView ? transformProxies(this.props.children) : {
      'name': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/laesa-shpe.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" className="af-class-form-3"><label htmlFor="First-Name">First Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="First-Name" data-name="First Name" placeholder="First Name " id="First-Name" {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="Last-Name">Last Name</label><input type="text" className="w-input" maxLength={256} name="Last-Name" data-name="Last Name" placeholder="Las Name" id="Last-Name" required /><label htmlFor="email">Email Address</label><input type="email" className="w-input" maxLength={256} name="email" data-name="Email" placeholder="Email" id="email" required /><label htmlFor="Password">Password</label><input type="password" className="w-input" maxLength={256} name="Password" data-name="Password" placeholder="Password" id="Password" required /><label htmlFor="Verify-Password">Verify Password</label><input type="password" className="w-input" maxLength={256} name="Verify-Password" data-name="Verify Password" placeholder="Verify Password" id="Verify-Password" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-button" /></form>
        </span>
      </span>
    )
  }
}

export default RegisterView

/* eslint-enable */