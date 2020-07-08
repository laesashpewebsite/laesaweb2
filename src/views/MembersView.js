/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class MembersView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MembersController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MembersView

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
    const proxies = Controller !== MembersView ? transformProxies(this.props.children) : {

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
            <div>
              <header id="nav" className="af-class-sticky-nav-2">
                <div data-collapse="medium" data-animation="default" data-duration={400} data-doc-height={1} role="banner" className="af-class-nav w-nav">
                  <div className="af-class-nav-inner">
                    <div className="af-class-nav-logo-wrap"><a href="index.html" className="af-class-brand w-nav-brand"><img src="images/LAESA_LOGO.png" width={175} alt className="af-class-image-logo" /></a></div>
                    <div className="af-class-nav-menu-wrap">
                      <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">About</a><a href="members.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">Members</a><a href="pced.html" id="eboard" className="af-class-nav-link af-class-eboard-link w-nav-link">Eboard</a><a href="events/events.html" className="af-class-nav-link w-nav-link">Events</a><a href="calendar.html" className="af-class-nav-link w-nav-link">Calendar</a><a href="login.html" className="af-class-nav-link w-nav-link">Login</a></nav>
                      <div className="af-class-menu-button w-nav-button">
                        <div className="af-class-menu-icon w-icon-nav-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <section id="cards-section" className="af-class-cards-section">
              <div className="af-class-centered-container w-container">
                <h2 className="af-class-heading-25">Want to become part of LAESA-SHPE's Familia?</h2>
                <p>Becoming a member of his organizations open the doors to many opportunities you haven't experience. </p>
                <div className="af-class-cards-grid-container">
                  <div id="w-node-6f8b6329dbb9-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-cards-image" /></div>
                    <h3>Step one</h3>
                    <p>Follow us on our social media! Instagram: LAESA_SHPE<br />Facebook: LAESA_SHPE<br />Linkedin: LAESA_SHPE </p>
                  </div>
                  <div id="w-node-37fa439f8bfa-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-cards-image" /></div>
                    <h3>Step two</h3>
                    <p>Our membership fee goes towards events like General Body Meetings, food, and resources for the club room which our members use.<br />Early Bird: $10 (Before GBM 1)<br />Amount: $15</p>
                  </div>
                  <div id="w-node-6f8b6329dbc0-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-cards-image" /></div>
                    <h3 id="w-node-6f8b6329dbc3-ff95263a">Step three</h3>
                    <p id="w-node-6f8b6329dbc5-ff95263a">Fill out the following form below so we can include you in our mailing list and be updated of any on-going events.</p>
                  </div>
                  <div id="w-node-6f8b6329dbc7-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-cards-image" /></div>
                    <h3 id="w-node-6f8b6329dbca-ff95263a">Step four</h3>
                    <p id="w-node-6f8b6329dbcc-ff95263a">One of our Eboard members is going to reach out to you so you can join our slack channel. We are excited to have you guys!</p>
                  </div>
                </div>
              </div>
            </section>
            <div />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default MembersView

/* eslint-enable */