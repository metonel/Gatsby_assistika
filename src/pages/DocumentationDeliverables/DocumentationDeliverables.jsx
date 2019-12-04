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

import technicalWritingStyle from "assets/jss/material-kit-react/views/technicalWriting"

class DocumentationDeliverables extends React.Component {
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
            <h1 className={classes.title}>Documentation deliverables</h1>
            <div className={classes.space20}></div>
            <h3 className={classes.description}>
              Assistika helps your company with all your technical writing needs
              so you can focus on your development instead. We guarantee world
              class documentation fit for your world-class products.
            </h3>

            <div className={classes.space20}></div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.description}>PRINT-BASED USER GUIDES</h2>
                <h2 className={classes.description}>
                  Epubs, PDF or Word files for:
                </h2>
                <ul className={classes.description}>
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
                <h2 className={classes.description}>EDITING & REVIEWING</h2>
                <h2 className={classes.description}>
                  We review documents and websites to:
                </h2>
                <ul className={classes.description}>
                  <li>make information easy to read, find and understand</li>
                  <li>ensure consistent style, tonality</li>
                  <li>apply Clear Language mark of approval</li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.description}>API DOCUMENTATION</h2>
                <h2 className={classes.description}>
                  We review documents and websites to:
                </h2>
                <ul className={classes.description}>
                  <li>API reference guides</li>
                  <li>getting started tutorials</li>
                  <li>status, authorization, rate limiting topics</li>
                </ul>
              </GridItem>
            </GridContainer>
            <div className={classes.space20}></div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.description}>MARKETING MATERIALS</h2>
                <ul className={classes.description}>
                  <li>Whitepapers</li>
                  <li>Case studies</li>
                  <li>Business proposals</li>
                  <li>Reports</li>
                  <li>Presentations</li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.description}>UX UI REVIEW</h2>
                <h2 className={classes.description}>
                  We can check your product to help you determine:
                </h2>
                <ul className={classes.description}>
                  <li>enhancements in user interface design</li>
                  <li>enhancement in product usability and accessibility</li>
                  <li>improvements in UI strings wording</li>
                  <li>enhancements in users' experience</li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.description}>RESUME WRITING</h2>
                <ul className={classes.description}>
                  <li>
                    Professionally written CVs that pass the 30-second test
                  </li>
                  <li>highlighs your skills, expertise, and achievements</li>
                </ul>
              </GridItem>
            </GridContainer>
            <div className={classes.scrollDown}>
              <i className="fas fa-arrow-down"></i>scroll for more
            </div>
          </div>
        </Parallax>

        {/* <div className={classes.main}></div> */}
        <Footer />
      </div>
    )
  }
}

export default withStyles(technicalWritingStyle)(DocumentationDeliverables)
