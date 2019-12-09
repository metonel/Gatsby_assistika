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
              <h1 className={classes.title}>Get started with Assistika</h1>
              <div className={classes.space20}></div>
              <h3 className={classes.description}>
                Let's talk! Abour how we can assist you with making your project
                as excellent it can be.
              </h3>

              <h3 className={classes.description}>
                You keep them for as long as you need their help with
                documenting your product or processes.
              </h3>

              <div className={classes.space20}></div>
              <div className={classes.space20}></div>

              <div style={{ padding: "0 2vw 0 2vw" }}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={7} lg={7}>
                    <h3 className={classes.subtitle}>Contact us</h3>
                    <h3 className={classes.description}>
                      We manage testing, documentation and localization projects
                      throughout world.
                    </h3>
                    <h3 className={classes.subtitle}>By Phone</h3>
                    <h3 className={classes.description}>+40 747937044</h3>
                    <h3 className={classes.subtitle}>By Email</h3>
                    <h3 className={classes.description}>info@assistika.com</h3>
                    <h3 className={classes.subtitle}>Come visit</h3>
                    <h3 className={classes.description}>
                      Cluj-Napoca, Romania
                    </h3>
                    <h3 className={classes.description}>
                      Str. Zefirului, nr. 12A
                    </h3>
                    <h3 className={classes.description}>400221</h3>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5} lg={4}>
                    <h3 style={{ padding: "0" }} className={classes.subtitle}>
                      Or fill in the form
                    </h3>
                    <CustomInput
                      labelText="Your name"
                      id="success"
                      white
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="success"
                      white
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Phone number"
                      id="success"
                      white
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Tell us about your project"
                      id="success"
                      white
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />

                    <div className={classes.space20}></div>
                    <Button style={{ textTransform: "none" }} color="twitter">
                      <i className={"fab fa-twitter"} /> Contact us!
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </Parallax>

        <div id="goTo" className={classes.main}></div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(HireUs)
