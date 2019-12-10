import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

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

        <Parallax image={require("assets/img/TheAgency.jpg")}>
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 style={{ textAlign: "center" }}className={classes.title}>The Agency</h1>              
          <div className={classes.space20}></div>
          <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>The Agency</h2>
              <h3 className={classes.description}>
                Assistika provides a range of documentation services for a fixed
                price. We give you the right technical writers, with the right
                skills for your business. We take responsibility for delivering
                the project on deadline and within budget.
              </h3>
          <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>Services</h2>
              <h3 className={classes.description}>
                Assistika helps companies with all their technical writing needs
                so they can focus on their development instead. We guarantee
                world class documentation fit for your world-class products.
              </h3>
          <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>
                Who is your geek writers squad?
              </h2>
              <h3 className={classes.description}>
                We are a bunch of linguists with a passion for technology and a
                talent for writing about how it works.
              </h3>
              <h3 className={classes.description}>
                But we're just not into Shakespeare. We're more into magic. We
                take complex concepts and turn them into ingeniously simple
                information.
              </h3>
            </div>
          </div>
        </Parallax>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(TheAgency)
