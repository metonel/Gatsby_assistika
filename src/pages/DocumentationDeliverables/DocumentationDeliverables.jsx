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

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class DocumentationDeliverables extends React.Component {
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
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 1,
            color: "white",
          }}
          {...rest}
        />

        <Parallax
          style={{ paddingTop: "70px", paddingBottom: "70px" }}
          image={require("assets/img/deliverables.jpg")}
        >
          <div className={classes.container}>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ duration: 500 }}
            >
              {props => (
                <h1 style={props} className="titleResponsive">
                  Documentation deliverables
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
                <h2 style={props} className="subtitleResponsive">
                  Assistika helps your company with all your technical writing
                  needs so you can focus on your development instead.
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
          <div className={classes.space20}></div>
          <Spring
            from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
            to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
            delay={500}
            config={{ duration: 500 }}
          >
            {props => (
              <h2 style={props} className={classes.subtitleDark}>
                We guarantee world class documentation fit for your world-class
                products.
              </h2>
            )}
          </Spring>

          <div className={classes.space20}></div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>PRINT-BASED USER GUIDES</h2>
              <h2 className={classes.descriptionDark}>
                Epubs, PDF or Word files for:
              </h2>
              <ul className={classes.descriptionDark}>
                <li>Product Manuals</li>
                <li>Process documents</li>
                <li>Release Notes</li>
                <li>Installation manuals</li>
                <li>Upgrade Guides</li>
                <li>Administrator guides</li>
                <li>Troubleshooting guides</li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>EDITING & REVIEWING</h2>
              <h2 className={classes.descriptionDark}>
                We review documents and websites to:
              </h2>
              <ul className={classes.descriptionDark}>
                <li>make information easy to read, find and understand</li>
                <li>ensure consistent style, tonality</li>
                <li>apply Clear Language mark of approval</li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>API DOCUMENTATION</h2>
              <h2 className={classes.descriptionDark}>
                We review documents and websites to:
              </h2>
              <ul className={classes.descriptionDark}>
                <li>API reference guides</li>
                <li>getting started tutorials</li>
                <li>status, authorization, rate limiting topics</li>
              </ul>
            </GridItem>
          </GridContainer>
          <div className={classes.space20}></div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>MARKETING MATERIALS</h2>
              <ul className={classes.descriptionDark}>
                <li>Whitepapers</li>
                <li>Case studies</li>
                <li>Business proposals</li>
                <li>Reports</li>
                <li>Presentations</li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>UX UI REVIEW</h2>
              <h2 className={classes.descriptionDark}>
                We can check your product to help you determine:
              </h2>
              <ul className={classes.descriptionDark}>
                <li>enhancements in user interface design</li>
                <li>enhancement in product usability and accessibility</li>
                <li>improvements in UI strings wording</li>
                <li>enhancements in users' experience</li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} lg={4}>
              <h2 className={classes.subtitleDark}>RESUME WRITING</h2>
              <ul className={classes.descriptionDark}>
                <li>Professionally written CVs that pass the 30-second test</li>
                <li>Highlights your skills, expertise, and achievements</li>
              </ul>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(DocumentationDeliverables)
