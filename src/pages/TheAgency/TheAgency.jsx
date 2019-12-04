import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import Camera from "@material-ui/icons/Camera"
import Palette from "@material-ui/icons/Palette"
import Favorite from "@material-ui/icons/Favorite"
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import Button from "components/CustomButtons/Button.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import NavPills from "components/NavPills/NavPills.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import profile from "assets/img/faces/christian.jpg"

import studio1 from "assets/img/examples/studio-1.jpg"
import studio2 from "assets/img/examples/studio-2.jpg"
import studio3 from "assets/img/examples/studio-3.jpg"
import studio4 from "assets/img/examples/studio-4.jpg"
import studio5 from "assets/img/examples/studio-5.jpg"
import work1 from "assets/img/examples/olu-eletu.jpg"
import work2 from "assets/img/examples/clem-onojeghuo.jpg"
import work3 from "assets/img/examples/cynthia-del-rio.jpg"
import work4 from "assets/img/examples/mariya-georgieva.jpg"
import work5 from "assets/img/examples/clem-onojegaw.jpg"

import theAgencyStyle from "assets/jss/material-kit-react/views/TheAgency.jsx"

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
