/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5ee2db0a9ed06b47877b408e").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class PcedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PcedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PcedView

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
    const proxies = Controller !== PcedView ? transformProxies(this.props.children) : {

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
                    <nav role="navigation" className="af-class-nav-menu-1 w-nav-menu"><a href="index.html" className="af-class-nav-link w-nav-link">About</a><a href="members.html" className="af-class-nav-link w-nav-link">Members</a><a href="pced.html" id="eboard" aria-current="page" className="af-class-nav-link af-class-eboard-link w-nav-link w--current">Eboard</a><a href="events/events.html" className="af-class-nav-link w-nav-link">Events</a><a href="calendar.html" className="af-class-nav-link w-nav-link">Calendar</a><a href="login.html" className="af-class-nav-link w-nav-link">Login</a></nav>
                    <div className="af-class-menu-button w-nav-button">
                      <div className="af-class-menu-icon w-icon-nav-menu" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div data-animation="slide" data-duration={500} data-infinite={1} className="af-class-slider-4 w-slider">
              <div className="af-class-mask-3 w-slider-mask">
                <div className="af-class-eboard-20-21 w-slide">
                  <div className="af-class-container-4 w-container">
                    <h2 className="af-class-heading-31">Executive Board 2020 - 2021</h2>
                  </div>
                  <div className="af-class-container-5 w-container">
                    <div className="af-class-div-block-13"><img src="images/Richard.png" width={303} alt className="af-class-image-15" />
                      <h3 className="af-class-heading-30">Richard Martinez</h3>
                      <h4 className="af-class-heading-30">President</h4>
                    </div>
                    <p className="af-class-paragraph-8"><strong>Hello Everyone, Hopefully your having a great day and staying safe from this virus. My name is Richard Martinez and I am the new President of LAESA-SHPE, I am currently a sophomore in Electrical Engineering and I am looking forward to meeting everyone!. One of the many things that influenced me to run for the president position was the goal to grow LAESA and expands its connections so that it can help people in need of information. LAESA-SHPE has impacted me in many ways, one of the ways it has impacted me was the events building up to the SHPE convention. Another was the career summit, what both of these events did was teach me the skills to be able to talk to recruiters, learn how to network and finally how to build a solid resume. So I greatly appreciate the skills and I thank LAESA and those I have met on the way. Warm Regards, Richard Martinez</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Alex_Guerrero.jpg" width={303} alt className="af-class-image-15" />
                      <h3 className="af-class-heading-30">Alex Guerrero</h3>
                      <h4 className="af-class-heading-30">Internal Vice President</h4>
                    </div>
                    <p className="af-class-paragraph-8"><strong>Hello Familia, My name is Alex Guerrero and I am LAESA-SHPE’s Internal-Vice President for the academic year 2020-2021. I'm a 2nd year Electrical Engineering student with a minor in Economics. I am very excited and grateful for the opportunity to give back and help out the chapter which has helped me out throughout the year professionally and academically. Across the year I have learned how to write a resume, how to write a cover letter, participated in multiple mock interviews, met amazing people all thanks to this club. LAESA-SHPE has touched everyone's heart in its own way, that’s the best thing about the club. A fun fact about me is that I like to play soccer, no matter the time I am always down for a game of soccer. At last, some goals I have for this year are the following: 1) I plan on helping out with the construction of our website and deploying it. Throughout the year a team of members is working on the website that will display LAESA-SHPE history across all platforms. 2) I am also looking forward to working with directors to try to establish a solid mentorship program for members. We going to keep working on professional-development and self-development. This year is going to be an exciting one, hopefully everything gets back to normal soon. Stay safe everyone!</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Mauricio_Almonte.png" width={240} alt className="af-class-image-15" />
                      <h3 className="af-class-heading-30">Mauricio Almonte</h3>
                      <h4 className="af-class-heading-30">External Vice President</h4>
                    </div>
                    <p className="af-class-paragraph-8"><strong>Hello, my name is Mauricio Mino. I am currently a senior studying mechanical Engineering. This year my Familia has elected me as External Vice President and I am honored. My personal experience with LAESA has helped me experience a home away from home. I am surrounded by individuals, who like me, seek to not just represent mi gente but uplift my community. I advocate for immigration reforms, strive for academic excellence and extend a hand to my peers so we all eat. If im not in the books you can catch me riding through the streets of NYC on my bike, if you can keep up that is.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Estefany_Gomez.jpg" width={303} srcSet="images/Estefany_Gomez-p-500.jpeg 500w, images/Estefany_Gomez-p-800.jpeg 800w, images/Estefany_Gomez-p-1080.jpeg 1080w, images/Estefany_Gomez.jpg 1565w" sizes="(max-width: 479px) 100vw, 303px" alt className="af-class-image-15" />
                      <h3 className="af-class-heading-30">Estefany Gomez</h3>
                      <h4 className="af-class-heading-30">Secretary</h4>
                    </div>
                    <p className="af-class-paragraph-8"><strong>Hola Familia, my name is Estefany Gomez and I am secretary of LAESA-SHPE 2020-2021. I am currently a fourth-year Multidisciplinary Civil Engineering student, with a minor in Mathematics. LAESA-SHPE has provided me with the resources I need to succeed professionally and academically. As a member of LAESA-SHPE, I gained the confidence to submit my resume, cover letter, and network. I learned how to present myself and the skills I gained through experience, and continue to gain as a member. I am glad to have met everyone because I found a family who is always rooting me and helping me grow. As secretary, I want to create more events and programs that will allow members to strengthen or develop skills that they can add to their resume. Thank you, Estefany Gomez</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Cookie-Monster.jpeg" width={303} alt className="af-class-image-15" />
                      <h3 className="af-class-heading-30">Kyle Persuad</h3>
                      <h4 className="af-class-heading-30">Treasurer</h4>
                    </div>
                    <p className="af-class-paragraph-8"><strong>Hello everyone! My name is Kyle Persaud and I am currently a third-year mechanical engineering student at the City College of New York. I am on this year's Executive Board as the Treasurer. I am enthusiastic to be able to give back to the community and chapter that has brought many great people into my life. All the people that I have interacted with during my time with LAESA-SHPE, have shown me the ways of the engineer and to prosper as one in our environment. Some of my favorite things to do are blasting music and going on long runs. There is a lot to come this year for us, so stay tuned!</strong></p>
                  </div>
                </div>
                <div className="af-class-eboard-19-20 w-slide">
                  <div className="af-class-container-4 w-container">
                    <h2 className="af-class-heading-31">Executive Board 2019 - 2020</h2>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Luis.png" width={303} srcSet="images/Luis-p-500.png 500w, images/Luis.png 690w" sizes="(max-width: 479px) 100vw, 303px" alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Luis Rodriguez</h4>
                    <h4 className="af-class-heading-30">President</h4>
                    <p className="af-class-paragraph-8"><strong>Hello my name is Luis Rodriguez, I am the acting President for LAESA-SHPE here at CCNY. I study electrical engineering along with mathematics and Portuguese. I have been involved in LAESA for the last two years, during which I have grown at a personal, professional and academic level. A lot of really bright-minded people gravitate towards LAESA, many of whom have taught me lessons I would not have otherwise found within the classroom. If I were to start giving shoutouts to the people that have helped develop this would pan out into an essay and not a small paragraph. I would say that my two favorite things to do after school are biking and playing music. Can’t wait to see how LAESA keeps growing as an organization and how It’ll continue to bring people from all types of background into the fold.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Richard.png" width={303} alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Richard Martinez</h4>
                    <h4 className="af-class-heading-30">Internal Vice President</h4>
                    <p className="af-class-paragraph-8"><strong>My name is Richard Martinez and I am this year’s Internal Vice President. I am currently a sophomore studying Electrical Engineering. Something interesting about myself Is that I was previously an electrician and got the opportunity to work in a Union named Local 3. This opportunity helped me realize that I wanted to explore the depths of what an electrician truly does and that was to learn the mathematical methods and not just the technical skills.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Evan.JPG" width={240} srcSet="images/Evan-p-500.jpeg 500w, images/Evan.JPG 768w" sizes="(max-width: 479px) 100vw, 240px" alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Evan Vazquez</h4>
                    <h4 className="af-class-heading-30">External Vice President</h4>
                    <p className="af-class-paragraph-8"><strong>Hello everyone, my name is Evan Vasquez and I am this year’s External Vice President. I am a Senior studying Computer Science with a minor in Mathematics, I am excited to have this opportunity and finally give back to the chapter that gave me so much throughout my years as a member. Fun fact about me , I am the undefeated chess champion of LAESA.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Gloria.jpeg" width={303} alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Gloria Hernandez</h4>
                    <h4 className="af-class-heading-30">Secretary</h4>
                    <p className="af-class-paragraph-8"><strong>My name is Gloria Hernandez Navarrete and I am a fourth-year civil engineering student at the City College of New York. I am on the Executive Board of LAESA-SHPE as secretary for the 2019-2020 academic school year. I can proudly say that thanks to the sacrifices of my parents and those before me, I am pursuing my childhood dreams. Education is a basic human right that no individual should be denied. A lot is to come this year for our team, but I am looking forward to it all!</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Keivon.jpg" width={303} srcSet="images/Keivon-p-500.jpeg 500w, images/Keivon-p-800.jpeg 800w, images/Keivon.jpg 1052w" sizes="(max-width: 479px) 100vw, 303px" alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Keivon Yang</h4>
                    <h4 className="af-class-heading-30">Treasurer</h4>
                    <p className="af-class-paragraph-8"><strong>Currently, I am a Sophomore Electrical Engineering major. I have had the privilege of being recognized as someone despite the difference in the background but as a member of the amazing Familia of LAESA. Despite my time with LAESA I have committed to multiple positions and found the value of being an active member of this organization. I am a firm believer that everyone who I have met or encountered, no matter how brief, has had an impact on my life and helped in my search of the ideal version of myself for better or for worse.</strong></p>
                  </div>
                </div>
                <div className="af-class-eboard-18-19 w-slide">
                  <div className="af-class-container-4 w-container">
                    <h2 className="af-class-heading-31">Executive Board 2018 - 2019</h2>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Rafa.png" width={303} alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Rafael Barinas</h4>
                    <h4 className="af-class-heading-30">President</h4>
                    <p className="af-class-paragraph-8"><strong>xxxxx</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Valentin.jpg" width={303} alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Valentin Martinez</h4>
                    <h4 className="af-class-heading-30">Internal Vice President</h4>
                    <p className="af-class-paragraph-8"><strong>My name is Valentin Martinez a Civil Engineering Graduate 19’ with a focus on Structural Engineering. I’ve been involved with LAESA-SHPE since my sophomore year and have held multiple positions within the organization: FIRST Lego League Director 17’ and, SHPE Jr. Director 17’. LAESA-SHPE changes lives by impacting and influencing the Hispanic community, and building you up to become a professional leader. And, I’ve had the privilege to be part of this movement #SHPE4LIFE</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Arelis.png" width={240} srcSet="images/Arelis-p-500.png 500w, images/Arelis.png 577w" sizes="(max-width: 479px) 100vw, 240px" alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Arelis Fienco</h4>
                    <h4 className="af-class-heading-30">External Vice President</h4>
                    <p className="af-class-paragraph-8"><strong>I was born and raised in Guayaquil, Ecuador. I have been part of LAESA-SHPE since my freshman year in 2016 at The City College of New York. I started fulfilling SHPE's mission by starting with SHPE Jr. and directing Noche de Ciencias at Manhattan Bridges High School in April 2017. The following academic year, I became part of the PCED 2018 team by creating a meaningful project along with my team that exposed high school students to leadership and real-life experiences.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Kayley.jpg" width={303} srcSet="images/Kayley-p-500.jpeg 500w, images/Kayley-p-800.jpeg 800w, images/Kayley-p-1080.jpeg 1080w, images/Kayley-p-1600.jpeg 1600w, images/Kayley.jpg 2000w" sizes="(max-width: 479px) 100vw, 303px" alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Kayley Arias</h4>
                    <h4 className="af-class-heading-30">Secretary</h4>
                    <p className="af-class-paragraph-8"><strong>Hi my name is Kayley Arias and I am a senior majoring in chemical engineering. I joined LAESA-SHPE in my second year in college. Upon joining this organization, I volunteered at numerous events and obtained various leadership position. I had the opportunity to speak to high school students, middle school students, and their parents about SHPE, college, and what a career in engineering entails. This organization has provided me with mentors, scholarships, and has helped me acquire the professional skills to land internships and full-time opportunities. LAESA-SHPE has taught me so much which is why I continue to be actively involved to make sure that others acquire the resources and skills they need to become successful professionals. I will continue to be actively involved even after I graduate.</strong></p>
                  </div>
                  <div className="w-container">
                    <div className="af-class-div-block-13"><img src="images/Brenda.jpg" width={303} height alt className="af-class-image-15" /></div>
                    <h4 className="af-class-heading-30">Brenda Valbuena</h4>
                    <h4 className="af-class-heading-30">Treasurer</h4>
                    <p className="af-class-paragraph-8"><strong>Hi, my name is Brenda Valbuena and I am a senior majoring in Mechanical Engineering. I joined LAESA-SHPE in 2017 and since then, I have been the former director of SHPE Jr (2017 - 2018) and the former Executive Board - Treasurer for the 2018-2019 academic year. During my time with LAESA-SHPE I had the opportunity to talk and encourage high school and current engineering students from NYC about STEM fields. This organization has become a life-time family, where I have had the opportunity to receive mentorship, improve my interpersonal skills, and become a better professional. My goal with LAESA-SHPE is to continue giving back to my club with resources, opportunities, and mentorship to create more successful students in the professional world.</strong></p>
                  </div>
                </div>
              </div>
              <div className="af-class-left-arrow-4 w-slider-arrow-left">
                <div className="w-icon-slider-left" />
              </div>
              <div className="af-class-right-arrow-5 w-slider-arrow-right">
                <div className="w-icon-slider-right" />
              </div>
              <div className="af-class-slide-nav-5 w-slider-nav w-round" />
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

export default PcedView

/* eslint-enable */