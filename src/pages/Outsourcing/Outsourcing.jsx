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
import { Spring, config } from "react-spring/renderprops"

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
  mouseEnter(add, remove) {
    document.body.getElementsByClassName(remove)[0].classList.add(add)
    document.body
      .getElementsByClassName(add)[0]
      .getElementsByTagName("img")[0].src = require("assets/img/" +
      add +
      ".svg")
    document.body.getElementsByClassName(remove)[0].classList.remove(remove)
  }
  mouseLeave(add, remove) {
    document.body.getElementsByClassName(remove)[0].classList.add(add)
    document.body
      .getElementsByClassName(add)[0]
      .getElementsByTagName("img")[0].src = require("assets/img/" +
      add +
      ".svg")
    document.body.getElementsByClassName(remove)[0].classList.remove(remove)
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
          bColor="#ffb852"
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                // delay={200}
                config={{ duration: 500 }}
              >
                {props => (
                  <h1 style={props} className="titleResponsive">
                    OUTSOURCING
                  </h1>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={500}
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Link to="/technical-writing" className={classes.linkWrapper}>
                <div
                  className="cardItem1"
                  onMouseEnter={() =>
                    this.mouseEnter("cardItem1hover", "cardItem1")
                  }
                  onMouseLeave={() =>
                    this.mouseLeave("cardItem1", "cardItem1hover")
                  }
                >
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/cardItem1.svg")}
                    alt=""
                  />
                  <h2>Technical writing</h2>
                  <GridContainer>
                    <GridItem xs={5} sm={5} md={5} lg={5}>
                      <h4 style={{ fontWeight: "500" }}>
                        We document stuff like this:
                      </h4>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7} lg={7}>
                      <h4>
                        IT, Marketing, Medical, Financial, Legal, Government,
                        Scientific, Engineering.
                      </h4>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={5} sm={5} md={5} lg={5}>
                      <h4 style={{ fontWeight: "500" }}>
                        ...and deliver it like this:
                      </h4>
                    </GridItem>
                    <GridItem xs={7} sm={7} md={7} lg={7}>
                      <h4>
                        Online Help, User Guides and PDFs for printing,
                        Tutorials, Walkthroughs, API Help.
                      </h4>
                    </GridItem>
                  </GridContainer>
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Link to="/editing-review" className={classes.linkWrapper}>
                <div
                  className="cardItem3"
                  onMouseEnter={() =>
                    this.mouseEnter("cardItem3hover", "cardItem3")
                  }
                  onMouseLeave={() =>
                    this.mouseLeave("cardItem3", "cardItem3hover")
                  }
                >
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/cardItem3.svg")}
                    alt=""
                  />
                  <h2>Editing and reviewing</h2>
                  <h4 className={classes.cardText}>
                    We rewrite and reorganize content to make information easier
                    to read and understand.
                  </h4>
                  {/* <ul className={classes.cardText}>
                      <li>
                        <h4>Find the information they need</h4>
                      </li>
                      <li>
                        <h4>Understand the information they find</h4>
                      </li>
                      <li>
                        <h4>
                          Use the information they find to act on what they need
                        </h4>
                      </li>
                    </ul> */}
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
          </GridContainer>
          {/* <h2 className={classes.subtitleDark}>OUR OUTSOURCING PROCESS</h2> */}

          <div className={classes.space30}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Adopt)
