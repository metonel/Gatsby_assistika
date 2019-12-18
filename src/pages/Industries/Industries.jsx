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

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class Industries extends React.Component {
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
          image={require("assets/img/Industries.jpg")}
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                // delay={2300}
                config={{ duration: 500 }}
              >
                {props => (
                  <h1 style={props} className="titleResponsive">
                    INDUSTRIES WE SERVE
                  </h1>
                )}
              </Spring>

              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={300}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className="subtitleResponsive">
                    We offer professional writing services for technology, life
                    sciences, and financial services customers worldwide.
                  </h3>
                )}
              </Spring>
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
          <Spring
            from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
            delay={500}
            config={{ duration: 500 }}
          >
            {props => (
              <h3 style={props} className={classes.subtitleDark}>
                We work with government agencies, private industries, and
                non-profit and charitable organizations.
              </h3>
            )}
          </Spring>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2
                style={{ fontWeight: "500" }}
                className={classes.subtitleDark}
              >
                We document stuff like this
              </h2>
              <h2
                // style={{ paddingLeft: "5vw" }}
                className={classes.subtitleDark}
              >
                IT, Marketing, Medical, Financial, Legal,
              </h2>
              <h2
                // style={{ paddingLeft: "5vw" }}
                className={classes.subtitleDark}
              >
                Government, Scientific, Engineering.
              </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2
                style={{ fontWeight: "500" }}
                className={classes.subtitleDark}
              >
                ...and deliver it like this
              </h2>
              <h3
                // style={{ paddingLeft: "5vw" }}
                className={classes.subtitleDark}
              >
                Online Help, user guides and PDFs for printing, 
              </h3>
              <h3
                // style={{ paddingLeft: "5vw" }}
                className={classes.subtitleDark}
              >
                tutorials, walkthroughs, API documentation.
              </h3>
            </GridItem>
          </GridContainer>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Industries)
