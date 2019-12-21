import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class TheAgency extends React.Component {
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
          style={{ paddingTop: "75px", paddingBottom: "15px" }}
          image={require("assets/img/TheAgency.jpg")}
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,-60px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={200}
                config={{ duration: 1000 }}
              >
                {props => (
                  <h1
                    style={{ ...props, textAlign: "center" }}
                    className="titleResponsive"
                  >
                    The Agency
                  </h1>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>

              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={500}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className="subtitleResponsive">
                    Assistika provides a range of documentation services for a
                    fixed price.
                  </h2>
                )}
              </Spring>

              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={1000}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className="subtitleResponsive">
                    We guarantee world class documentation fit for your
                    world-class products.
                  </h3>
                )}
              </Spring>
              <div className={classes.space20}></div>
            </div>
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
                    About the agency
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

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
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      Assistika helps your company with all your technical
                      writing needs so you can focus on your development
                      instead.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      We guarantee world-class documentation fit for your
                      world-class products.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      We take responsibility for delivering the project on
                      deadline and within budget.
                    </h3>
                  </div>
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
                    About your geek writers
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
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
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      We are a bunch of linguists with a passion for technology
                      and a talent for writing about how it works.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      But we're just not into Shakespeare. We're more into
                      magic. We take complex concepts and turn them into
                      ingeniously simple information.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(TheAgency)
