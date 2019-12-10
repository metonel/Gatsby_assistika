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

class Training extends React.Component {
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
          bColor="#ffb852"
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className="titleResponsive">TRAINING AND CONSULTING</h1>
              <div className={classes.space20}></div>
              <h3 className={classes.subtitle}>
                We offer training to give you the know-how and skills to write
                and edit your own printed or online information.
              </h3>
              <h3 className={classes.subtitle}>
                We look at your existing content to architecture together better
                documentation solutions.
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
                    src={require("assets/img/training.png")}
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
          <div className={classes.space20}></div>
          <h1 className={classes.subtitleDark}>OUR CONSULTING PROCESS</h1>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Training)
