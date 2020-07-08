/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class LaesaProjectsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LaesaProjectsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LaesaProjectsView

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
    const proxies = Controller !== LaesaProjectsView ? transformProxies(this.props.children) : {

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
            <div className="w-container">
              <h1 className="af-class-heading-26">LAESA Projects</h1>
            </div>
            <div>
              <div className="w-container">
                <p><strong>LAESA-SHPE has always excelled at preparing our members academically and professionally. LAESA Projects is one of our new programs that we are introducing to LEASA. Our goal is for our members to gain experience that you cannot achieve in a classrrom environment by creating meaningful projects that could benefit everyone! This website is an example of what can come out of it. You will have the oportunity to learn how to work with teammates and engineer your project as you see fit. This is also becomes a great resume booster and a topic to talk about with recruitters at conferences! So join one of the current projects that are being run or propose your own and pitch to members of the club to join in on the project!</strong></p>
              </div>
            </div>
            <header id="hero" className="af-class-hero">
              <div className="af-class-flex-container w-container">
                <div>
                  <h1>Hero</h1>
                  <p>This <strong>hero</strong> is built with a <strong>flex</strong> layout, so the content will grow or shrink to fit the space available in its container. <br />‍<br />To change this section’s background, select the “Hero Section,” then scroll to the <strong>background</strong> section of the Style panel and add a color, image, or gradient.</p><a href="#" className="w-button">Button text</a></div>
                <div className="af-class-hero-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-hero-image-2" /></div>
              </div>
            </header>
            <section id="feature-section" className="af-class-feature-section-3">
              <div className="af-class-flex-container w-container">
                <div className="af-class-feature-image-mask"><img src="https://uploads-ssl.webflow.com/5db1c76aadcfe25e881680fa/5db86dc421496616bf357c25_placeholder.svg" alt className="af-class-feature-image-2" /></div>
                <div>
                  <h2 className="af-class-heading-28">LAESA Website</h2>
                  <p><strong>We are currently looking for anyone interested in frontend or backend development. You do not need any web experience to join</strong></p><a href="#" className="w-button">Join Team</a></div>
              </div>
            </section>
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

export default LaesaProjectsView

/* eslint-enable */