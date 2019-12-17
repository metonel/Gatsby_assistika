import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import { Link } from "gatsby"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx"

class SectionBasics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false,
    }
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this)
  }
  componentDidMount() {
    console.log("did mount")
    // new WOW.WOW().sync()
    // $(wrapper).on("mousemove", function(e) {
    //   var ax = -($(wrapper).innerWidth() / 2 - e.pageX) / 20
    //   var ay = ($(wrapper).innerHeight() / 2 - e.pageY) / 10
    //   card.attr(
    //     "style",
    //     "transform: rotateY(" +
    //       ax +
    //       "deg) rotateX(" +
    //       ay +
    //       "deg);-webkit-transform: rotateY(" +
    //       ax +
    //       "deg) rotateX(" +
    //       ay +
    //       "deg);-moz-transform: rotateY(" +
    //       ax +
    //       "deg) rotateX(" +
    //       ay +
    //       "deg)",
    //     "background-color: black"
    //   )
    // })

    // nouislider.create(this.refs.slider1, {
    //   start: [40],
    //   connect: [true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 },
    // })
    // nouislider.create(this.refs.slider2, {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 },
    // })
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value })
  }
  mouseEnter(add, remove) {
    document.body.getElementsByClassName(remove)[0].classList.add(add)
    document.body
      .getElementsByClassName(add)[0]
      .getElementsByTagName("img")[0].src = require("assets/img/" +
      add +
      ".svg")
    document.body.getElementsByClassName(remove)[0].classList.remove(remove)
  }
  mouseLeave(add, remove) {
    document.body.getElementsByClassName(remove)[0].classList.add(add)
    document.body
      .getElementsByClassName(add)[0]
      .getElementsByTagName("img")[0].src = require("assets/img/" +
      add +
      ".svg")
    document.body.getElementsByClassName(remove)[0].classList.remove(remove)
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
    const { classes } = this.props
    return (
      <div>
        <div
          id="services"
          style={{ minHeight: "103vh", padding: "1.1em 15px" }}
        >
          <div className={classes.title}>
            <h2 className="wow fadeInUp" data-wow-duration="1.5s">
              Services
            </h2>
          </div>
          <div className={classes.title}>
            <h4>
              Assistika helps your company with all your technical writing needs
              so you can focus on your development instead.
            </h4>
            <h4>
              We guarantee world class documentation fit for your world-class
              products.
            </h4>
          </div>
          <div className="cards">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <Link to="/technical-writing" className={classes.linkWrapper}>
                  <div
                    className="cardItem1"
                    onMouseEnter={() =>
                      this.mouseEnter("cardItem1hover", "cardItem1")
                    }
                    onMouseLeave={() =>
                      this.mouseLeave("cardItem1", "cardItem1hover")
                    }
                  >
                    <img
                      className={classes.iconPlain}
                      src={require("assets/img/cardItem1.svg")}
                      alt=""
                    />
                    <h2>Technical writing</h2>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5} lg={5}>
                        <h4 style={{ fontWeight: "500" }}>
                          We document stuff like this:
                        </h4>
                      </GridItem>
                      <GridItem xs={7} sm={7} md={7} lg={7}>
                        <h4>
                          IT, Marketing, Medical, Financial, Legal, Government,
                          Scientific, Engineering.
                        </h4>
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={5} sm={5} md={5} lg={5}>
                        <h4 style={{ fontWeight: "500" }}>
                          ...and deliver it like this:
                        </h4>
                      </GridItem>
                      <GridItem xs={7} sm={7} md={7} lg={7}>
                        <h4>
                          Online Help, User Guides and PDFs for printing,
                          Tutorials, Walkthroughs, API Help.
                        </h4>
                      </GridItem>
                    </GridContainer>
                  </div>
                </Link>
                <div className={classes.space20}></div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <Link to="/adopt" className={classes.linkWrapper}>
                  <div
                    className="cardItem2"
                    onMouseEnter={() =>
                      this.mouseEnter("cardItem2hover", "cardItem2")
                    }
                    onMouseLeave={() =>
                      this.mouseLeave("cardItem2", "cardItem2hover")
                    }
                  >
                    <img
                      className={classes.iconPlain}
                      src={require("assets/img/cardItem2.svg")}
                      alt=""
                    />
                    <h2>Adopt a technical writer from us</h2>
                    <h4 className={classes.cardText}>
                      Full-time or part-time technical writers, on your premises
                      or online.
                    </h4>
                    {/* <h4 className={classes.cardText}>
                      All projects are supervised by senior Assistika staff.
                    </h4>
                    <h4></h4>
                    <h4 className={classes.cardText}>
                      Assistika assigns one writer or an entire team to work
                      with you on your project.
                    </h4>
                    <h4 className={classes.cardText}>
                      You keep them for as long as you need their help with
                      documenting your product or processes.
                    </h4> */}
                  </div>
                </Link>
                <div className={classes.space20}></div>
              </GridItem>
            </GridContainer>

            <div className={classes.space30} />

            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <Link to="/editing-review" className={classes.linkWrapper}>
                  <div
                    className="cardItem3"
                    onMouseEnter={() =>
                      this.mouseEnter("cardItem3hover", "cardItem3")
                    }
                    onMouseLeave={() =>
                      this.mouseLeave("cardItem3", "cardItem3hover")
                    }
                  >
                    <img
                      className={classes.iconPlain}
                      src={require("assets/img/cardItem3.svg")}
                      alt=""
                    />
                    <h2>Editing and reviewing</h2>
                    <h4 className={classes.cardText}>
                      We rewrite and reorganize content to make information
                      easier to read and understand.
                    </h4>
                    {/* <ul className={classes.cardText}>
                      <li>
                        <h4>Find the information they need</h4>
                      </li>
                      <li>
                        <h4>Understand the information they find</h4>
                      </li>
                      <li>
                        <h4>
                          Use the information they find to act on what they need
                        </h4>
                      </li>
                    </ul> */}
                  </div>
                </Link>

                <div className={classes.space20}></div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <Link to="/training" className={classes.linkWrapper}>
                  <div
                    className="cardItem4"
                    onMouseEnter={() =>
                      this.mouseEnter("cardItem4hover", "cardItem4")
                    }
                    onMouseLeave={() =>
                      this.mouseLeave("cardItem4", "cardItem4hover")
                    }
                  >
                    <img
                      className={classes.iconPlain}
                      src={require("assets/img/cardItem4.svg")}
                      alt=""
                    />
                    <h2>Training and consulting</h2>
                    <h4 className={classes.cardText}>
                      Training to give you the know-how to write and edit your
                      own documentation.
                    </h4>
                    {/* <h4 className={classes.cardText}>
                      We look at your existing documentation and architecure
                      together better User Assistance solutions.
                    </h4> */}
                  </div>
                </Link>
                <div className={classes.space20}></div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <div className={classes.space70} />
        <div
          style={{
            // padding: "1.1em 15px",
            position: "relative",
            backgroundColor: "#F2F2F2",
          }}
        >
          <h2>Who is your squad of geek writers?</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
              <h4>
                We are a bunch of linguists with a passion for technology and a
                talent for writing about how it works.
              </h4>
              <h4>
                But we're not into Shakespeare. We love the poetry of turning
                complex concepts into ingeniously simple information.
              </h4>
            </GridItem>

            <GridItem xs={12} sm={12} md={6} lg={6}>
              <div className={classes.space20} />
              <div className={classes.space20} />
              <div className={classes.space20} />

              <VisibilitySensor partialVisibility offset={{ left: -150 }}>
                {({ isVisible }) => (
                  <Spring
                    delay={1000}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(100px)",
                    }}
                  >
                    {props => (
                      <div style={props}>
                        <img
                          className="geekImage"
                          src={require("assets/img/team.png")}
                          alt=""
                        />
                      </div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space20} />
        <div style={{ padding: "1.1em 15px" }}>
          <h2>How we work</h2>
          <h4>
            Assistika provides a range of documentation services for a fixed
            price.
          </h4>

          <h4>
            We take responsibility for delivering the project on deadline and
            within budget.
          </h4>

          <div className={classes.space20} />
          <div className={classes.space20} />
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={1000}
                to={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {props => (
                  <div style={props}>
                    <img
                      className="workImage, noDisplay"
                      src={require("assets/img/howWe.gif")}
                      alt=""
                    />
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          {/* <h4>CLICK TO FIND OUT MORE ABOUT OUR PROCESS</h4> */}
        </div>
      </div>
    )
  }
}

export default withStyles(basicsStyle)(SectionBasics)
