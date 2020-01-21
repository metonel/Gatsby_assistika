import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import { Spring, config } from "react-spring/renderprops"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class Careers extends React.Component {
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  }
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          brand="Assistika"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 1,
            color: "white",
          }}
          {...rest}
        />

        <Parallax bColor="#27afda">
          <div className={classes.container}>
            <div className={classes.brand}>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,-60px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                config={{ duration: 800 }}
              >
                {props => (
                  <h1 style={props} className="titleResponsive">
                    WANT IN?
                  </h1>
                )}
              </Spring>
              <div className={classes.space20}></div>
            </div>
            <Spring
              from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
              to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
              config={{ duration: 800 }}
            >
              {props => (
                <h2 style={props} className="subtitleResponsive">
                  Here are the jobs open now
                </h2>
              )}
            </Spring>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={2000}
              config={{ duration: 500 }}
            >
              {props => (
                <div style={props} className={classes.scrollDown}>
                  <a class="linkScroll" href="#goTo">
                    <img
                      class="iConDown"
                      src={require("assets/img/down.svg")}
                      alt=""
                    />
                    Scroll to find out more
                  </a>
                </div>
              )}
            </Spring>
          </div>
        </Parallax>

        <div id="goTo" className={classes.main}>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>Graduate technical writer</h2>
          <h3 className={classes.descriptionDark}>
            Do you want to get stuck into a really enjoyable career right away?
          </h3>
          <h3 className={classes.descriptionDark}>
            Assistika is looking for a great communicator with a passion for
            technology to help us deliver truly outstanding documentation.
            You’ll be surrounded by a great team, helping to develop software
            and other technical products that are simple and enjoyable to use.
          </h3>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>Responsibilities</h2>
          <h3 className={classes.descriptionDark}>
            As a graduate technical author at Assistika, you will:
          </h3>

          <ul className={classes.descriptionDark}>
            <li>
              write technical documentation in a way that’s easy to read and
              understand
            </li>
            <li>
              design and develop guides, tutorials and Help systems for
              end-users, system administrators, support engineers, and product
              developers
            </li>
            <li>
              interact with software engineers to understand the products they
              are developing
            </li>
            <li>
              test software products to create documentation and provide
              feedback on product usability and accessibility
            </li>
            <li>create and maintain Assistika’s information architecture</li>
          </ul>

          <h3 className={classes.subtitleDark}>Requirements</h3>

          <ul className={classes.descriptionDark}>
            <li>
              bachelors degree or higher qualification in Technical
              Communication, English, Journalism or similar field
            </li>
            <li>excellent written English</li>
            <li>medium to advanced knowledge of computers and networking</li>
            <li>ability to learn complex IT concepts quickly</li>
            <li>
              ability to simplify and organize complex technical information
            </li>
            <li>
              excellent communication skills to work with cross-functional teams
              (Development, Marketing, Support, etc.)
            </li>
          </ul>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>Email us your CV</h2>
          <h3 className={classes.descriptionDark}>
            If you have a knack for turning complex ideas into something
            ingeniously simple, we want to hear from you! There’s no lengthy
            application form, all we’ll need is your CV and a cover letter –
            simple as that.
          </h3>
          <h3 className={classes.descriptionDark}>
            Email your CV at{" "}
            <span style={{ color: "#27afda" }}>careers@assistika.com</span>
          </h3>
          <div className={classes.space20}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Careers)
