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

class TheAgency extends React.Component {
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

              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={500}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitle}>
                    The Agency
                  </h2>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={1000}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className={classes.description}>
                    Assistika provides a range of documentation services for a
                    fixed price. We give you the right technical writers, with
                    the right skills for your business. We take responsibility
                    for delivering the project on deadline and within budget.
                  </h3>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={1000}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitle}>
                    Services
                  </h2>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={1500}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className={classes.description}>
                    Assistika helps companies with all their technical writing
                    needs so they can focus on their development instead. We
                    guarantee world class documentation fit for your world-class
                    products.
                  </h3>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={1500}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitle}>
                    Who is your geek writers squad?
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
                  <h3 style={props} className={classes.description}>
                    We are a bunch of linguists with a passion for technology
                    and a talent for writing about how it works.
                  </h3>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={2000}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className={classes.description}>
                    But we're just not into Shakespeare. We're more into magic.
                    We take complex concepts and turn them into ingeniously
                    simple information.
                  </h3>
                )}
              </Spring>
            </div>
          </div>
        </Parallax>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(TheAgency)
