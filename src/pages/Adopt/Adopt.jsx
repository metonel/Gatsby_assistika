import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class Adopt extends React.Component {
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
          style={{ paddingTop: "70px", paddingBottom: "80px" }}
          bColor="#27afda"
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className="titleResponsiveAdopt">
                Adopt a technical writer from us
              </h1>
              <h3 className="subtitleResponsive">
                Assistika assigns one writer or an entire team to work with you
                on your project.
              </h3>
              <h3 className="subtitleResponsive">
                You keep them for as long as you need their help with
                documenting your product or processes.
              </h3>
            </div>
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
                    src={require("assets/img/adopt.png")}
                    alt=""
                  />
                </div>
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
          <div className={classes.space20}></div>

          <VisibilitySensor partialVisibility offset={{ left: -50 }}>
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
                    Your extended tech writing team
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
                    Sometimes you don't want to be stuck with a technical writer
                    forever.
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
                    For project-based technical writers staffing, partner with
                    Assistika.
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
                    We can help you meet changing project demands without the
                    cost and liabilities of additional full-time employees.
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <div className={classes.space30}></div>
          <div className={classes.space30}></div>
          <div className={classes.space30}></div>

          <VisibilitySensor partialVisibility offset={{ left: -50 }}>
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
                    On-site or online
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
                    Full-time or part-time technical writers, on your premises
                    or online.
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
                    All projects are supervised by senior Assistika staff.
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <div className={classes.space30}></div>
          <div className={classes.space30}></div>
          <div className={classes.space30}></div>

          <VisibilitySensor partialVisibility offset={{ left: -50 }}>
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
                    Contract vs. hired technical writers
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
                    Contract staffing provides flexibility and scalability to
                    grow your business.
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
                    Here are a few more reasons why contract staffing a
                    technical writer for your team is a great idea.
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
                  <ul style={props}>
                    <li className={classes.descriptionDark}>
                      handle rapid project growth or expansion
                    </li>
                    <li className={classes.descriptionDark}>
                      reduce training costs
                    </li>
                    <li className={classes.descriptionDark}>
                      keeps the focus on your core business
                    </li>
                    <li className={classes.descriptionDark}>
                      expert competencies and specialized skills
                    </li>
                    <li className={classes.descriptionDark}>
                      project-based or seasonal needs
                    </li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          {/* <h2 className={classes.subtitleDark}>OUR OUTSTAFFING PROCESS</h2> */}

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Adopt)
