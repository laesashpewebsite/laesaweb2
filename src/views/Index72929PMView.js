/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class Index72929PMView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/Index72929PMController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = Index72929PMView

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
    const proxies = Controller !== Index72929PMView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/laesa-shpe.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <header id="nav" className="af-class-sticky-nav-2">
              <div data-collapse="medium" data-animation="default" data-duration={400} data-doc-height={1} role="banner" className="af-class-nav w-nav">
                <div className="af-class-nav-inner">
                  <div className="af-class-nav-logo-wrap"><a href="index.html" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/LAESA_LOGO.png" width={175} alt className="af-class-image-logo" /></a></div>
                  <div className="af-class-nav-menu-wrap">
                    <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="index.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">About</a><a href="members.html" className="af-class-nav-link w-nav-link">Members</a><a href="pced.html" id="eboard" className="af-class-nav-link af-class-eboard-link w-nav-link">Eboard</a><a href="events/events.html" className="af-class-nav-link w-nav-link">Events</a><a href="calendar.html" className="af-class-nav-link w-nav-link">Calendar</a><a href="login.html" className="af-class-nav-link w-nav-link">Login</a></nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-icon w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="af-class-section af-class-wide af-class-img">
              <div id="features" className="af-class-feature-wrap" />
              <h2 className="af-class-heading-7">Meet Our Familia!</h2><img src="images/Convention-Group.jpg" width={1026} srcSet="images/Convention-Group-p-500.jpeg 500w, images/Convention-Group-p-1080.jpeg 1080w, images/Convention-Group-p-1600.jpeg 1600w, images/Convention-Group-p-2000.jpeg 2000w, images/Convention-Group-p-2600.jpeg 2600w, images/Convention-Group-p-3200.jpeg 3200w, images/Convention-Group.jpg 4032w" sizes="100vw" alt className="af-class-image-12" />
              <div id="features" className="af-class-feature-wrap" />
            </div>
            <div className="af-class-section">
              <div className="af-class-feature-wrap af-class-icons" />
              <div className="af-class-feature-wrap af-class-reverse">
                <div data-w-id="d79d0682-95d0-be91-6539-b82f492963f4" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content">
                  <p className="af-class-paragraph-2">LAESA–SHPE is the largest and most prominent undergraduate student organization at The City College of New York. In 1983, a group of dedicated students, to unite all Latino and other minority engineering students, share cultural ideas and promote leadership, founded LAESA within City College. In 1986, LAESA joined forces with the Society of Hispanic Professional Engineers (SHPE) to better achieve their goals and connect with a larger body of professionals. This partnership has flourished over the years and today, LAESA is a firm supporter of the SHPE core values, while remaining true to its original mission. With over 150 members, LAESA-SHPE has been able to gather motivated students from all engineering disciplines and a diverse pool of cultural backgrounds. This dynamic group of students, alongside their highly supportive alumni members, has had many achievements at The City College of New York and within the community. Some of our accomplishments are listed below:</p>
                </div>
              </div>
              <div className="af-class-feature-wrap af-class-reverse">
                <div data-w-id="c2ac171b-4da7-6ed5-ba78-ea14acdbb813" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content" />
                <div className="af-class-feature-image" />
              </div>
              <div id="how-to-use" className="af-class-feature-wrap">
                <div className="af-class-feature-image" />
              </div>
              <div data-w-id="11f1355a-64a1-7e99-2127-ce2b48b3db04" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content">
                <div className="af-class-title">Academic Development &amp; Leadership Yearly Programs</div>
                <p className="af-class-paragraph-5">Developing Excellence in Academics and Leadership DEAL Program since 2000<br />Information Technology Program since 1990<br />Mentorship Program since 2018</p>
              </div>
              <div data-w-id="52bfb88a-4b00-3787-8ff8-d1e066be1fc7" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content">
                <div className="af-class-title">Community Outreach Programs &amp; Events</div>
                <p className="af-class-paragraph-6">Pre-College Engineering Day since 1994<br />New York Institute of Science, Technology, Engineering, and Mathematics since 2001<br />Noche de Ciencas since 2017<br />First Lego League since 2001<br />SHPE Jr. Chapters at Manhattan Bridges High School and George Washington High School since 2019</p>
              </div>
              <div id="how-to-use" className="af-class-feature-wrap">
                <div className="af-class-feature-image" />
              </div>
              <div data-w-id="9491265c-62fd-00c4-c67d-3df2d174ae29" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content">
                <div className="af-class-title">Leadership Representatives within SHPE</div>
                <p className="af-class-paragraph-7">Region IV Regional Student Representative: 2001, 2003, 2004, 2018<br /><br />Region IV Sub-Regional Student Representative: 2000, 2006, 2018, 2019</p>
              </div>
              <div id="how-to-use" className="af-class-feature-wrap">
                <div className="af-class-feature-image" />
              </div>
              <div className="af-class-feature-wrap af-class-reverse">
                <div data-w-id="e1d6ce46-8955-f673-23f7-14c60a587412" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-feature-content" />
                <div className="af-class-feature-image" />
              </div>
            </div>
            <div className="af-class-bottom-image-wrap">
              <section id="feature-section" className="af-class-feature-section">
                <div className="w-row">
                  <div className="af-class-column-2 w-col w-col-6">
                    <h4 className="af-class-heading-5">LAESA SHPE'S MISSION</h4>
                    <p className="af-class-paragraph-3">Our mission is to be the premier facilitator of student's endeavors in the Science, Technology, Engineering, and Mathematics field (STEM). Also, to facilitate in other areas as well, as to help to fully develop individuals to their highest potential.</p><img src="images/SHPEMission.jpg" width={654} srcSet="images/SHPEMission-p-500.jpeg 500w, images/SHPEMission-p-800.jpeg 800w, images/SHPEMission-p-1600.jpeg 1600w, images/SHPEMission-p-2000.jpeg 2000w, images/SHPEMission-p-2600.jpeg 2600w, images/SHPEMission-p-3200.jpeg 3200w, images/SHPEMission.jpg 3888w" sizes="(max-width: 767px) 86vw, 47vw" alt className="af-class-image-13" /></div>
                  <div className="af-class-column-3 w-col w-col-6">
                    <h4 className="af-class-heading-5">LAESA SHPE'S VISION</h4>
                    <p className="af-class-paragraph-4">Our mission is to S.T.E.P into THE FUTURE. This can be accomplished by using four principles. They are the principles of Support, Teamwork, Excellence, and Professionalism!<br />‍</p><img src="images/SHPEVision.jpg" width={669} srcSet="images/SHPEVision-p-500.jpeg 500w, images/SHPEVision-p-800.jpeg 800w, images/SHPEVision-p-1600.jpeg 1600w, images/SHPEVision-p-2000.jpeg 2000w, images/SHPEVision-p-2600.jpeg 2600w, images/SHPEVision-p-3200.jpeg 3200w, images/SHPEVision.jpg 3888w" sizes="(max-width: 479px) 86vw, (max-width: 767px) 87vw, 47vw" alt className="af-class-image-14" /></div>
                </div>
              </section>
              <div className="af-class-section-2">
                <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider-3 w-slider">
                  <div className="w-slider-mask">
                    <div className="af-class-academic-development-slide w-slide">
                      <div className="w-container">
                        <h1 className="af-class-heading-11">Heading</h1>
                      </div>
                    </div>
                    <div className="af-class-professional-development-slide w-slide">
                      <div className="w-container">
                        <h1 className="af-class-heading-11">Heading</h1>
                      </div>
                    </div>
                    <div className="af-class-chapter-development-slide w-slide">
                      <div className="w-container">
                        <h1 className="af-class-heading-11">Heading</h1>
                      </div>
                    </div>
                    <div className="af-class-leadership-development-slide w-slide">
                      <div className="w-container">
                        <h1 className="af-class-heading-11">Heading</h1>
                      </div>
                    </div>
                    <div className="af-class-community-outreach-slide w-slide">
                      <div className="w-container">
                        <h1 className="af-class-heading-11">Heading</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-slider-arrow-left">
                    <div className="af-class-icon-2 w-icon-slider-left" />
                  </div>
                  <div className="af-class-right-arrow-4 w-slider-arrow-right">
                    <div className="w-icon-slider-right" />
                  </div>
                  <div className="af-class-slide-nav-4 w-slider-nav w-round" />
                </div>
              </div>
            </div>
            <div id="download" className="af-class-section af-class-wide af-class-purple">
              <div data-w-id="376e2a1f-ec70-0dab-11ea-b1863101e37b" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-wrap">
                <h2 className="af-class-heading-6">Ready to get started with LAESA Projects?</h2>
                <div className="af-class-button-wrap"><a href="#" className="af-class-button w-button">Learn More</a><a href="#" className="af-class-button af-class-contact w-button">Get in Touch</a></div>
              </div>
            </div>
            <div className="af-class-section af-class-wide">
              <div data-w-id="8cf47482-19f1-1f52-25ba-910a60bc91de" style={{WebkitTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 40PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-wrap">
                <h2>Get updates from LAESA-SHPE</h2>
                <p>New scholarships, discounts and free lessons</p>
                <div className="af-class-form-block w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" className="af-class-form-2"><input type="text" className="af-class-input w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required /><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-button af-class-form-button w-button" /></form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
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

export default Index72929PMView

/* eslint-enable */