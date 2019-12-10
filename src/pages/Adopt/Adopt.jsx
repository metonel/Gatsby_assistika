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
              <h1 className="titleResponsive">
                ADOPT A TECHNICAL WRITER FROM US
              </h1>
              <h3 className={classes.subtitle}>
                Assistika assigns one writer or an entire team to work with you
                on your project.
              </h3>
              <h3 className={classes.subtitle}>
                You keep them for as long as you need their help with
                documenting your product or processes.
              </h3>
            </div>
            <div className={classes.imag}>
              <img
                className="serviceImage"
                src={require("assets/img/adopt.png")}
                alt=""
              />
            </div>
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
                Your extended tech writing team
              </h2>
              <h3 className={classes.descriptionDark}>
                Sometimes you don't want to be stuck with a technical witer
                forever.
              </h3>
              <h3 className={classes.descriptionDark}>
                For project-based technical writers staffing, partner with
                Assistika. We can help you meet changing project demands without
                the cost and liabilities of additional full time employees.
              </h3>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2 className={classes.subtitleDark}>On-site or online</h2>
              <h3 className={classes.descriptionDark}>
                Full-time or part-time technical writers, on your premises or
                online.
              </h3>
              <h3 className={classes.descriptionDark}>
                All projects are supervised by senior Assistika staff.
              </h3>
            </GridItem>
          </GridContainer>

          <div className={classes.space30}></div>

          <h2 className={classes.subtitleDark}>
            CONTRACT vs. HIRED TECHNICAL WRITERS
          </h2>
          <h3 className={classes.descriptionDark}>
            The flexibility and scalability that contract staffing provides can
            help drive your business growth strategy.
          </h3>
          <h3 className={classes.descriptionDark}>
            Here are a few more reasons why contract staffing a technical writer
            for your team is a great idea.
          </h3>

          <ul className={classes.descriptionDark}>
            <li>Handle rapid project growth or expansion</li>
            <li>Reduce training costs</li>
            <li>Keeps the focus on your core business</li>
            <li>Expert competencies and specialized skills</li>
            <li>Project-based or seasonal needs</li>
          </ul>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>OUR OUTSTAFFING PROCESS</h2>

          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Adopt)
