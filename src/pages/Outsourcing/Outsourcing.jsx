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

        <Parallax
          style={{ paddingTop: "70px", paddingBottom: "30px" }}
          bColor="#46aa54"
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className="titleResponsive">OUTSOURCING</h1>
              <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>
                Assistika helps your company with all your technical writing
                needs so you can focus on your development instead.
              </h2>
              <h3 className={classes.subtitle}>
                We guarantee world class documentation fit for your world-class
                products.
              </h3>
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
              <Link to="/technical-writing" className={classes.linkWrapper}>
                <div className="cardItem">
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/Edit.svg")}
                    alt=""
                  />
                  <h2>Technical writing</h2>
                  <h4>We document stuff like this</h4>
                  <h4>
                    IT, Marketing, Medical, Financial, Legal, Government,
                    Scientific, Engineering.
                  </h4>
                  <h4>...and deliver it like this</h4>
                  <h4>
                    Online Help, User Guides and PDFs for printing, Tutorials,
                    Walkthroughs, API Help.
                  </h4>
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <Link to="/editing-review" className={classes.linkWrapper}>
                <div className="cardItem">
                  <img
                    className={classes.iconPlain}
                    src={require("assets/img/EditRev.svg")}
                    alt=""
                  />
                  <h2>Editing and reviewing</h2>
                  <h4 className={classes.cardText}>
                    Basically, we write and reorganize your content to make sure
                    your audience can:
                  </h4>
                  <ul className={classes.cardText}>
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
                  </ul>
                </div>
              </Link>
              <div className={classes.space20}></div>
            </GridItem>
          </GridContainer>
          <h2 className={classes.subtitleDark}>OUR OUTSOURCING PROCESS</h2>

          <div className={classes.space30}></div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(Adopt)
