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
            <h1 className="titleResponsive">Technical Writing</h1>
            <div className={classes.space20}></div>
            <h3 className={classes.subtitle}>
              Outsource the development and maintenance of your technical
              documentation to us.
            </h3>
            <h3 className={classes.subtitle}>
              We deliver great documentation on time, and within budget.
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2 className={classes.subtitleDark}>
                Our expert technical authors develop information that is easy to
                find, read and understand.
              </h2>
              <h3 className={classes.descriptionDark}>
                Our expert technical authors develop information that is easy to
                find, read and understand.
              </h3>
              <h3 className={classes.descriptionDark}>
                We create documentation that:
              </h3>
              <ul className={classes.descriptionDark}>
                <li>Explains your product functionality</li>
                <li>Markets your product</li>
                <li>
                  Reduces helpdesk calls by answering all your customers'
                  questions
                </li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2 className={classes.subtitleDark}>
                Documentation deliverables
              </h2>
              <h2 className={classes.descriptionDark}>We're the best at:</h2>
              <ul className={classes.descriptionDark}>
                <li>Web-based online help systems</li>
                <li>Print-based user guides</li>
                <li>API documentation</li>
                <li>Editing & reviewing</li>
                <li>UX UI review</li>
                <li>Tutorials & walkthroughs</li>
                <li>Policy, compliance & audit documents</li>
                <li>Resume writing</li>
                <li>Marketing materials</li>
              </ul>
            </GridItem>
          </GridContainer>

          <div className={classes.space20}></div>

          <h2
            className="wow fadeInUp"
            data-wow-duration="1.5s"
            className={classes.subtitleDark}
          >
            REDUCE YOUR TRANSLATION COSTS
          </h2>

          <h2 className={classes.descriptionDark}>
            Will your content be translated into multiple languages? Here's how
            we can reduce your translation costs:
          </h2>
          <ul className={classes.descriptionDark}>
            <li>Use simplified language that is easy to translate</li>
            <li>Edit content translated from other languages</li>
          </ul>
          <div className={classes.space20}></div>

          {/* <h2 className={classes.subtitleDark}>
            OUR TECHNICAL WRITING PROCESS
          </h2> */}
          <div className={classes.space20}></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(TechnicalWriting)
