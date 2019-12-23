import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class TechnicalWriting extends React.Component {
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

        <Parallax
          style={{ paddingTop: "70px", paddingBottom: "30px" }}
          bColor="#2b7fbe"
        >
          <div className={classes.container}>
            {/* <div className={classes.brand}> */}
            <h1 className="titleResponsive">Technical writing</h1>
            <div className={classes.space20}></div>
            <h3 style={{ maxWidth: "55vw" }} className="subtitleResponsive">
              Outsource the development and maintenance of your technical
              documentation to us.
            </h3>

            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={200}
              config={{ duration: 1000 }}
            >
              {props => (
                <div style={props} className={classes.imag}>
                  <img
                    className="serviceImage"
                    src={require("assets/img/tWriting.png")}
                    alt=""
                  />
                </div>
              )}
            </Spring>
            <div className={classes.scrollDown}>
              <a class="linkScroll" href="#goTo">
                <img
                  class="iConDown"
                  src={require("assets/img/down.svg")}
                  alt=""
                />
                Scroll to find out more
              </a>
            </div>
          </div>
        </Parallax>

        <div id="goTo" className={classes.main}>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    We deliver great documentation on time, and within budget.
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    Our expert technical authors develop information that is
                    easy to find, read and understand.
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    We create documentation that:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props} className={classes.descriptionDark}>
                    <li>explains your product functionality</li>
                    <li>markets your product</li>
                    <li>
                      reduces helpdesk calls by answering all your customers'
                      questions
                    </li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    Documentation deliverables
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    We're the best at:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props} className={classes.descriptionDark}>
                    <li>web-based online help systems</li>
                    <li>print-based user guides</li>
                    <li>API documentation</li>
                    <li>editing & reviewing</li>
                    <li>UX UI review</li>
                    <li>tutorials & walkthroughs</li>
                    <li>policy, compliance & audit documents</li>
                    <li>resume writing</li>
                    <li>marketing materials</li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    Reduce your translation costs
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    Will your content be translated into multiple languages?
                    Here's how we can reduce your translation costs:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props} className={classes.descriptionDark}>
                    <li>use simplified language that is easy to translate</li>
                    <li>edit content translated from other languages</li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          <div className={classes.space20}></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(TechnicalWriting)
