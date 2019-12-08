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

        <Parallax bColor="#27afda">
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className={classes.title}>INDUSTRIES WE SERVE</h1>
              <div className={classes.space20}></div>
              <h3 className={classes.subtitle}>
                We offer professional writing services for technology, life
                sciences, and financial services customers worldwide.
              </h3>
              <h3 className={classes.subtitle}>
                We work with government agencies, private industries, and
                non-profit and charitable organizations.
              </h3>
              <h3 className={classes.subtitle}>
                Our niche is Information Technology (IT) with a focus on
                technical writing and business analysis.
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
          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2 className={classes.subtitleDark}>
                We document stuff like this
              </h2>
              <h2 className={classes.subtitleDark}>
                IT, Marketing, Medical, Financial, Legal,
              </h2>
              <h2 className={classes.subtitleDark}>
                Government, Scientific, Engineering.
              </h2>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h2 className={classes.subtitleDark}>
                ...and deliver it like this
              </h2>
              <h3 className={classes.subtitleDark}>
                Online Help, User Guides and PDFs for
              </h3>
              <h3 className={classes.subtitleDark}>
                printing, Tutorials, Walkthroughs, API Help.
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
