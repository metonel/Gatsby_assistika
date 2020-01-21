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
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     checked: [24, 22],
  //     selectedEnabled: "b",
  //     // checkedA: true,
  //     checkedB: true,
  //   }
  //   this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
  // }
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })

    function caret() {
      if (
        document
          .getElementsByClassName("subtitleHomeTyped")[0]
          .classList.contains("border")
      ) {
        document
          .getElementsByClassName("subtitleHomeTyped")[0]
          .classList.remove("border")
      } else {
        document
          .getElementsByClassName("subtitleHomeTyped")[0]
          .classList.add("border")
      }

      setTimeout(() => caret(), 500)
    }
    caret()

    // setTimeout(function() {
    //   document.getElementsByClassName("bodyHider")[0].style.backgroundColor =
    //     "white"
    // }, 1500)
    // setTimeout(function() {
    //   document.getElementsByClassName("bodyHider")[0].style.display = "none"
    // }, 3000)

    let txtElement = document.querySelector(".subtitleHomeTyped")
    // let words = [
    //   "Outsoutce the development of your technical documentation  to us",
    //   "Adopt a technical writer from us",
    //   "Get technical writing training from us",
    //   "Send us your technical documents for editing",
    // ]
    let phrases = [
      "who can get you out of any documentation black hole",
      "who can develop documentation from the ground up",
      "who turn complex concepts into ingeniously simple information",
      "online or on-site",
    ]
    let wait = 3000
    let txt = ""
    let wordIndex = 0
    let isDeleting = false

    function type() {
      // Current index of word
      const current = wordIndex % phrases.length
      // Get full text of current word
      const fullTxt = phrases[current]

      // Check if deleting
      if (isDeleting) {
        // Remove char
        txt = fullTxt.substring(0, txt.length - 1)
      } else {
        // Add char
        txt = fullTxt.substring(0, txt.length + 1)
      }

      // Insert txt into element
      txtElement.innerHTML = `<span class="txt">${txt}</span>`

      // Initial Type Speed
      let typeSpeed = 60

      if (isDeleting) {
        typeSpeed /= 2
      }

      // If word is complete
      if (!isDeleting && txt === fullTxt) {
        // Make pause at end
        typeSpeed = wait
        // Set delete to true
        isDeleting = true
      } else if (isDeleting && txt === "") {
        isDeleting = false
        // Move to next word
        wordIndex++
        // Pause before start typing
        typeSpeed = 100
      }
      setTimeout(() => type(), typeSpeed)
    }
    // type()
    setTimeout(() => type(), 3000)
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
              <div style={{ height: "100px" }}>
                <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  // delay={200}
                  config={{ duration: 500 }}
                >
                  {props => (
                    <h1 style={props} className="titleResponsive">
                      Technical writers
                      <span className="subtitleHomeTyped border"></span>
                      {/* <span> */}
                      {/* <FormControlLabel
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
                    /> */}
                    </h1>
                  )}
                </Spring>
                <div className={classes.space20}></div>
                {/* <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={700}
                config={{ duration: 500 }}
              >
                {props => (
                  <h2 style={props} className="subtitleHome noDisplay">
                    Outsource the development and maintenance of your technical
                    content to us.
                  </h2>
                )}
              </Spring> */}
              </div>
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                delay={1300}
                config={{ duration: 500 }}
              >
                {props => <h3 style={props} className="subtitleHome"></h3>}
              </Spring>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
              <div className={classes.space20}></div>
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
                        <span class="hover2 hover-12">CONTRACT US</span>{" "}
                        <span style={{ paddingRight: "35px" }}></span>
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
                        <span class="hover2 hover-12">OUTSOURCE TO US</span>
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
                    Scroll down to find out more
                  </a>
                </div>
              )}
            </Spring>
          </div>
        </Parallax>

        <div id="goTo" className={classNames(classes.main)}>
          <SectionBasics />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
