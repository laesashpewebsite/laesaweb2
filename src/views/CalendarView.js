/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class CalendarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CalendarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CalendarView

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
    const proxies = Controller !== CalendarView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/laesa-shpe.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
            <header id="nav" className="af-class-sticky-nav-2">
              <div data-collapse="medium" data-animation="default" data-duration={400} data-doc-height={1} role="banner" className="af-class-nav w-nav">
                <div className="af-class-nav-inner">
                  <div className="af-class-nav-logo-wrap"><a href="#" className="af-class-brand w-nav-brand"><img src="images/LAESA_LOGO.png" width={112} alt /></a></div>
                  <div className="af-class-nav-menu-wrap">
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-icon w-icon-nav-menu" />
                    </div>
                    <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="#" className="af-class-nav-link w-nav-link">About</a><a href="#" className="af-class-nav-link w-nav-link">Members</a><a href="#" className="af-class-nav-link w-nav-link">Eboard</a><a href="#" className="af-class-nav-link w-nav-link">Events</a><a href="#" className="af-class-nav-link w-nav-link">Calendar</a></nav>
                  </div>
                </div>
              </div>
            </header>
            <div className="w-container">
              <h2 className="af-class-heading-22">Calendar</h2>
            </div>
            <div />
            <div className="af-class-footer"><img src="images/SHPE_logo_FullColor.png" width={345} alt className="af-class-image-9" />
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

export default CalendarView

/* eslint-enable */