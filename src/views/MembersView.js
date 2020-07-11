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
                <h2 className="af-class-main-heading">Want to become part of LAESA-SHPE's Familia?</h2>
                <p>Becoming a member of his organizations open the doors to many opportunities you haven't experience. </p>
                <div className="af-class-cards-grid-container">
                  <div id="w-node-6f8b6329dbb9-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="images/download.png" width={96} alt /><img src="images/images.png" width={103} alt /><img src="images/download1.jpeg" width={101} alt className="af-class-image-19" /></div>
                    <h3 className="af-class-heading-36">Step one</h3>
                    <p className="af-class-paragraph-10">Follow us on our social media! <br />Instagram: LAESA_SHPE<br />Facebook: LAESA_SHPE<br />Linkedin: LAESA_SHPE </p>
                  </div>
                  <div id="w-node-37fa439f8bfa-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="images/Screen-Shot-2020-07-09-at-11.47.19-PM.png" alt /></div>
                    <h3 className="af-class-heading-37">Step two</h3>
                    <p className="af-class-paragraph-9">Our membership fee goes towards events like General Body Meetings, food, and resources for the club room which our members use.<br />Early Bird: $10 (Before GBM 1)<br />Amount: $15</p>
                  </div>
                  <div id="w-node-6f8b6329dbc0-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="images/Membership_Form.png" alt /></div>
                    <h3 id="w-node-6f8b6329dbc3-ff95263a" className="af-class-heading-38">Step three</h3>
                    <p id="w-node-6f8b6329dbc5-ff95263a" className="af-class-paragraph-11">Fill out the following form below so we can include you in our mailing list and be updated of any on-going events.</p>
                  </div>
                  <div id="w-node-6f8b6329dbc7-ff95263a">
                    <div className="af-class-cards-image-mask"><img src="images/SDDw7CnuoUGax6x9mTo7dd.jpg" srcSet="images/SDDw7CnuoUGax6x9mTo7dd-p-800.jpeg 800w, images/SDDw7CnuoUGax6x9mTo7dd-p-1080.jpeg 1080w, images/SDDw7CnuoUGax6x9mTo7dd-p-1600.jpeg 1600w, images/SDDw7CnuoUGax6x9mTo7dd.jpg 1920w" sizes="(max-width: 479px) 92vw, (max-width: 991px) 95vw, 205.00001525878906px" alt /></div>
                    <h3 id="w-node-6f8b6329dbca-ff95263a" className="af-class-heading-39">Step four</h3>
                    <p id="w-node-6f8b6329dbcc-ff95263a" className="af-class-paragraph-12">One of our Eboard members is going to reach out to you so you can join our slack channel. We are excited to have you guys!</p>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact-form" className="af-class-contact-form">
              <div className="w-container">
                <h2 className="af-class-heading-40">Contact form - Want to hear more about us? Lets have a meeting</h2>
                <div id="formInstructions" className="af-class-small-text"><em>Fields marked with an asterisk (*) are required.</em></div>
                <div className="w-form">
                  <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form">
                    <div className="af-class-contact-form-grid">
                      <div id="w-node-4ba6f2c03981-ff95263a"><label htmlFor="First-Name" id="contact-first-name">First name *</label><input type="text" className="w-input" maxLength={256} name="First-Name" data-name="First Name" id="First-Name" required /></div>
                      <div id="w-node-4ba6f2c03985-ff95263a"><label htmlFor="Last-Name" id="contact-last-name">Last name *</label><input type="text" className="w-input" maxLength={256} name="Last-Name" data-name="Last Name" id="Last-Name" required /></div>
                      <div id="w-node-4ba6f2c03989-ff95263a"><label htmlFor="Email" id="contact-email">Email *</label><input type="email" className="w-input" maxLength={256} name="Email" data-name="Email" id="Email" required /></div>
                      <div id="w-node-4ba6f2c0398d-ff95263a"><label htmlFor="Contact-Phone-Number" id="contact-phone">Phone number</label><input type="tel" className="w-input" maxLength={256} name="Contact-Phone-Number" data-name="Contact Phone Number" id="Contact-Phone-Number" /></div>
                      <div id="w-node-4ba6f2c03991-ff95263a"><label htmlFor="Message" id="contact-message">Message</label><textarea data-name="Message" maxLength={5000} id="Message" name="Message" className="w-input" defaultValue={""} /></div>
                    </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-button" /></form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </section>
            <section id="subscribe-form" className="af-class-subscribe-form">
              <div className="af-class-centered-container w-container">
                <h2 className="af-class-heading-41">Subscribe form</h2>
                <p>This section uses a <strong>container</strong> element to ensure the content looks right on every device. It’s centered with the class “Centered Container.”</p>
                <div className="w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" className="af-class-subscribe-form-flex">
                    <div className="af-class-subscribe-form-input-wrapper"><label htmlFor="Subscriber-Email" id="subscribe-email">Email</label><input type="email" className="af-class-subscribe-form-input w-input" maxLength={256} name="Subscriber-Email" data-name="Subscriber Email" id="Subscriber-Email" required /></div><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="w-button" /></form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </section>
            <div className="af-class-footer"><img src="images/SHPE_logo_horiz_City-College_CMYK.png" width={481} srcSet="images/SHPE_logo_horiz_City-College_CMYK-p-800.png 800w, images/SHPE_logo_horiz_City-College_CMYK-p-1080.png 1080w, images/SHPE_logo_horiz_City-College_CMYK-p-1600.png 1600w, images/SHPE_logo_horiz_City-College_CMYK-p-2000.png 2000w, images/SHPE_logo_horiz_City-College_CMYK.png 3781w" sizes="(max-width: 479px) 100vw, 480.9895935058594px" alt className="af-class-image-9" />
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

export default MembersView

/* eslint-enable */