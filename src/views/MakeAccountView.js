/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import RegisterView from './RegisterView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class MakeAccountView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MakeAccountController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MakeAccountView

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
    const proxies = Controller !== MakeAccountView ? transformProxies(this.props.children) : {
      'register': [],
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
                  <div className="af-class-nav-logo-wrap"><a href="index.html" className="af-class-brand w-nav-brand"><img src="images/LAESA_LOGO.png" width={175} alt className="af-class-image-logo" /></a></div>
                  <div className="af-class-nav-menu-wrap">
                    <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">About</a><a href="members.html" className="af-class-nav-link w-nav-link">Members</a><a href="pced.html" id="eboard" className="af-class-nav-link af-class-eboard-link w-nav-link">Eboard</a><a href="events/events.html" className="af-class-nav-link w-nav-link">Events</a><a href="calendar.html" className="af-class-nav-link w-nav-link">Calendar</a><a href="login.html" className="af-class-nav-link w-nav-link">Login</a></nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-icon w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="w-form">
              <RegisterView.Controller-af-sock-register />
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="af-class-footer"><img src="images/SHPE_logo_horiz_City-College_CMYK.png" width={547} srcSet="images/SHPE_logo_horiz_City-College_CMYK-p-800.png 800w, images/SHPE_logo_horiz_City-College_CMYK-p-1080.png 1080w, images/SHPE_logo_horiz_City-College_CMYK-p-1600.png 1600w, images/SHPE_logo_horiz_City-College_CMYK-p-2000.png 2000w, images/SHPE_logo_horiz_City-College_CMYK.png 3781w" sizes="(max-width: 479px) 55vw, (max-width: 767px) 43vw, 48vw" alt className="af-class-shpe-logo" />
              <div className="af-class-wrap">
                <div className="af-class-footer-list"><a href="#" className="af-class-footer-link">Email</a><a href="https://www.instagram.com/laesa_shpe/" target="_blank" className="af-class-footer-link">Instagram</a><a href="https://www.facebook.com/LaesaShpe/" target="_blank" className="af-class-footer-link">Facebook</a><a href="#" className="af-class-footer-link">LinkedIn</a><a href="image-license-info.html" className="af-class-footer-link">Image License Info</a><a href="http://webflow.com" className="af-class-footer-link">Powered by Webflow</a></div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default MakeAccountView

/* eslint-enable */