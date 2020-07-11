/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class MemberLoginView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MemberLoginController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MemberLoginView

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
    const proxies = Controller !== MemberLoginView ? transformProxies(this.props.children) : {
      'username': [],
      'password': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/laesa-shpe.webflow.css);
        ` }} />
        <span className="af-view">
          <form id="wf-form-member-login" name="wf-form-member-login" data-name="member-login" className="af-class-form-4"><label htmlFor="Username">Username</label>{map(proxies['username'], props => <input type="email" maxLength={256} name="Username" data-name="Username" placeholder id="Username" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="email">Password</label>{map(proxies['password'], props => <input type="password" maxLength={256} name="email" data-name="Email" placeholder id="password" required {...{...props, className: `w-input ${props.className || ''}`}}>{props.children}</input>)}<input type="submit" defaultValue="Login" data-wait="Please wait..." className="w-button" /></form>
        </span>
      </span>
    )
  }
}

export default MemberLoginView

/* eslint-enable */