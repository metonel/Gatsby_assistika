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
import { Link } from "gatsby"

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

        <Parallax image={require("assets/img/TheAgency.jpg")}>
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className="titleResponsive">OUTSTAFFING</h1>
              <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>
                Assistika is the perfect solution when hiring an in-house
                technical writer is not right option for your company.
              </h2>
              <h3 className={classes.description}>
                We give you the right technical writers, with the right skills
                for your business.
              </h3>
              <h3 className={classes.description}>
                Technical writers who grasp your technology quickly and explain
                it more clearly than your engineers can.
              </h3>
              <div style={{ padding: "0 40px 0 40px" }}></div>
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Link to="/adopt" className={classes.linkWrapper}>
                <div className="cardItem">
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/Adopt.svg")}
                    alt=""
                  />
                  <h2>Adopt a technical writer from us</h2>
                  <h4 className={classes.cardText}>
                    Full-time or part-time technical writers, on your premises
                    or online.
                  </h4>
                  <h4 className={classes.cardText}>
                    All projects are supervised by senior Assistika staff.
                  </h4>
                  <h4></h4>
                  <h4 className={classes.cardText}>
                    Assistika assigns one writer or an entire team to work with
                    you on your project.
                  </h4>
                  <h4 className={classes.cardText}>
                    You keep them for as long as you need their help with
                    documenting your product or processes.
                  </h4>
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Link to="/training" className={classes.linkWrapper}>
                <div className="cardItem">
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/Training.svg")}
                    alt=""
                  />
                  <h2>Training and consulting</h2>
                  <h4 className={classes.cardText}>
                    Training to give you the know-how to write and edit your own
                    documentation.
                  </h4>
                  <h4 className={classes.cardText}>
                    We look at your existing documentation and architecure
                    together better User Assistance solutions.
                  </h4>
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
          </GridContainer>
          <h2 className={classes.subtitleDark}>OUR OUTSTAFFING PROCESS</h2>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Adopt)
