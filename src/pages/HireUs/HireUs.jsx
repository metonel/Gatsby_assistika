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

import CustomInput from "components/CustomInput/CustomInput.jsx"
import Button from "components/CustomButtons/Button.jsx"
import { Spring, config } from "react-spring/renderprops"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class HireUs extends React.Component {
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

        <Parallax bColor="#2b7fbe">
          <div className={classes.container}>
            <div className={classes.brand}>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,-60px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                // delay={100}
                config={{ duration: 800 }}
              >
                {props => (
                  <h1 style={props} className="titleResponsive">
                    Get started with Assistika
                  </h1>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                delay={300}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className="subtitleResponsive">
                    Let's talk! About how we can assist you with making your
                    project as excellent as it can be.
                  </h3>
                )}
              </Spring>

              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
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
          <div style={{ padding: "0 2vw 0 2vw" }}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={7} lg={7}>
                <h3 className={classes.subtitleDark}>Contact us</h3>
                <h3 className={classes.descriptionDark}>
                  We manage documentation projects throughout the world.
                </h3>
                <h3 className={classes.subtitleDark}>By Phone</h3>
                <h3 className={classes.descriptionDark}>+40 747 937 044</h3>
                <h3 className={classes.subtitleDark}>By Email</h3>
                <h3 className={classes.descriptionDark}>
                  client@assistika.com
                </h3>
                <h3 className={classes.subtitleDark}>Come visit</h3>
                <h3 className={classes.descriptionDark}>
                  Cluj-Napoca, Romania
                </h3>
                <h3 className={classes.descriptionDark}>
                  Str. Zefirului, nr. 12A
                </h3>
                <h3 className={classes.descriptionDark}>400221</h3>
                <div className={classes.space20}></div>
                <div className={classes.space20}></div>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} lg={4}>
                <h3 style={{ padding: "0" }} className={classes.subtitleDark}>
                  Or fill in the form
                </h3>
                <CustomInput
                  labelText="Your name"
                  id="success"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Email"
                  id="success"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Phone number"
                  id="success"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Tell us about your project"
                  id="success"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />

                <div className={classes.space20}></div>
                <Button style={{ textTransform: "none" }} color="twitter">
                  <i className={"fab fa-twitter"} /> Contact us
                </Button>
                <div className={classes.space20}></div>
                <div className={classes.space20}></div>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(HireUs)
