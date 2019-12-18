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
import Parallax from "components/Parallax/Parallax.jsx"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import SectionBasics from "./Sections/SectionBasics.jsx"
import { Spring, config } from "react-spring/renderprops"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

class Components extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      // checkedA: true,
      checkedB: true,
    }
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
  }
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
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value })
  }
  handleToggle(value) {
    const { checked } = this.state
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    this.setState({
      checked: newChecked,
    })
  }
  render() {
    const { classes, ...rest } = this.props
    const noDisplay = "noDisplay"
    return (
      <div>
        <Header
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 1,
            color: "white",
          }}
          {...rest}
        />
        <Parallax
          style={{ paddingTop: "85px" }}
          image={require("assets/img/bg4.jpg")}
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
                    Expert technical writers? Ready
                    {/* <span> */}
                    <FormControlLabel
                      style={{
                        padding: "0 0 0 12px",
                        position: "relative",
                        top: "1.1em",
                      }}
                      control={
                        <Switch
                          color="primary"
                          checked={this.state.checkedB}
                          onChange={this.handleChange("checkedB")}
                          value="checkedB"
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
                    />
                  </h1>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={700}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className="subtitleResponsive noDisplay">
                    Outsource the development and maintenance of your technical
                    content to us.
                  </h2>
                )}
              </Spring>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={1300}
                config={{ duration: 500 }}
              >
                {props => (
                  <h3 style={props} className="subtitleResponsive">
                    We give you the right technical writers, with the right
                    skills for your business.
                  </h3>
                )}
              </Spring>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div id="examples2">
                <Spring
                  from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                  delay={1800}
                  config={{ duration: 500 }}
                >
                  {props => (
                    <div style={props} class="example2">
                      <Link to="/outstaffing">
                        <span class="hover2 hover-12">OUTSTAFFING</span>
                      </Link>
                    </div>
                  )}
                </Spring>
                <Spring
                  from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                  to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
                  delay={2000}
                  config={{ duration: 500 }}
                >
                  {props => (
                    <div style={props} class="example2">
                      <Link to="/outsourcing">
                        <span class="hover2 hover-12">OUTSOURCING</span>
                      </Link>
                    </div>
                  )}
                </Spring>
              </div>
            </div>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={2300}
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

        <div id="goTo" className={classNames(classes.main)}>
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
