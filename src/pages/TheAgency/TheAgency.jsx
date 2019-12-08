import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import theAgencyStyle from "assets/jss/material-kit-react/views/theAgency.jsx"

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
            height: 200,
            color: "white",
          }}
          {...rest}
        />

        <Parallax image={require("assets/img/TheAgency.jpg")}>
          <div className={classes.container}>
            {/* <GridContainer> */}
            {/* <GridItem> */}
            <div className={classes.brand}>
              <h1 className={classes.title}>The Agency</h1>
              <h2 className={classes.subtitle}>The Agency</h2>
              <h3 className={classes.description}>
                Assistika provides a range of documentation services for a fixed
                price. We give you the right technical writers, with the right
                skills for your business. We take responsibility for delivering
                the project on deadline and within budget.
              </h3>
              <h2 className={classes.subtitle}>Services</h2>
              <h3 className={classes.description}>
                Assistika helps companies with all their technical writing needs
                so they can focus on their development instead. We guarantee
                world class documentation fit for your world-class products.
              </h3>
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
            {/* </GridItem> */}
            {/* </GridContainer> */}
            <div className={classes.scrollDown}>
              <i className="fas fa-arrow-down"></i>scroll for more
            </div>
          </div>
        </Parallax>

        <Footer />
      </div>
    )
  }
}

export default withStyles(theAgencyStyle)(TheAgency)
