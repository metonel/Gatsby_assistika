import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
import { Link } from "gatsby"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionBasics from "./Sections/SectionBasics.jsx"
import SectionNavbars from "./Sections/SectionNavbars.jsx"
import SectionTabs from "./Sections/SectionTabs.jsx"
import SectionPills from "./Sections/SectionPills.jsx"
import SectionNotifications from "./Sections/SectionNotifications.jsx"
import SectionTypography from "./Sections/SectionTypography.jsx"
import SectionJavascript from "./Sections/SectionJavascript.jsx"
import SectionCarousel from "./Sections/SectionCarousel.jsx"
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx"
import SectionLogin from "./Sections/SectionLogin.jsx"
import SectionExamples from "./Sections/SectionExamples.jsx"
import SectionDownload from "./Sections/SectionDownload.jsx"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand="Assistikazxczxczx"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            {/* <GridContainer> */}
            {/* <GridItem> */}
            <div className={classes.brand}>
              <h1 className={classes.title}>
                Expert technical writers? Ready!
                <FormControlLabel
                  control={
                    <Switch
                      // checked={this.state.checkedB}
                      // onChange={this.handleChange("checkedB")}
                      // value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        icon: classes.switchIcon,
                        iconChecked: classes.switchIconChecked,
                        bar: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  // label="Toggle is off"
                />
              </h1>
              <h3 className={classes.subtitle}>
                Outsource the development and maintenance of your technical
                content to us.
              </h3>
              <h3 className={classes.subtitle}>
                We give you the right technical writers, with the right skills
                for your business. Technical writers who grasp your technology
                quickly and explain it more clearly than your engineers can..
              </h3>
            </div>
            {/* </GridItem> */}
            {/* </GridContainer> */}
            <div className={classes.scrollDown}>
              <i className="fas fa-arrow-down"></i>scroll for more
            </div>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <SectionBasics />
          {/* <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
