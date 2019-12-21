import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class EditingReview extends React.Component {
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

        <Parallax
          style={{ paddingTop: "70px", paddingBottom: "30px" }}
          bColor="#46aa54"
        >
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className="titleResponsive">Editing and reviewing</h1>
              <div className={classes.space20}></div>
              <h3 className="subtitleResponsive">
                Is your message clear enough for your customers?
              </h3>
              {/* <div className={classes.space20}></div> */}
              <h3 className="subtitleResponsive">
                We rewrite and reorganize content to make information easier to
                read and understand.
              </h3>
            </div>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={200}
              config={{ duration: 1000 }}
            >
              {props => (
                <div style={props} className={classes.imag}>
                  <img
                    className="serviceImage"
                    src={require("assets/img/editing.png")}
                    alt=""
                  />
                </div>
              )}
            </Spring>
            <div className={classes.scrollDown}>
              <a class="linkScroll" href="#goTo">
                <img
                  class="iConDown"
                  src={require("assets/img/down.svg")}
                  alt=""
                />
                Scroll to find out more
              </a>
            </div>
          </div>
        </Parallax>

        <div id="goTo" className={classes.main}>
          <div className={classes.space20}></div>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    Clear Language standard
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      The Clear Language Mark is Assistika's seal of approval
                      for the clarity of a document or website.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      After editing, we send you your upgraded content with an
                      individually numbered Clear Language approval mark.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      This will show the world that you are commited to get your
                      message across to your audience.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      You can add this Clear Language mark on your website or
                      documents.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    Show your commitment to clear communication
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    If your organization is making an effort to communicate your
                    message clearly, why not tell people?
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      After reviewing your documents, Assistika can add the
                      Clear Language Mark on each website and printed document
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      that meets internationally accepted plain language
                      standards.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      This means that your public can understand and act on your
                      message after just one reading.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      The Clear Language mark gives independent proof that your
                      content meets a high standard of clarity.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    How to get the Clear Language mark
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      If your document or website is up to our standards, we
                      will send you our Clear Language approval.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      You can use the Clear Language logo on your website or
                      documents to show the world
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      that you are committed to get your message across to your
                      audience.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      If your document is not clear enough, we will send you an
                      estimate of the cost of any necessary editing.
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      We can also send you a free sample edit to help you start
                      the process.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <div style={props}>
                    <h3 className={classes.descriptionDark}>
                      Once you have accepted our editing estimate, we will edit
                      your document so that it meets Clear Language
                    </h3>
                    <h3 className={classes.descriptionDark}>
                      standard and send you your individually numbered CLEAR
                      LANGUAGE mark to use on the document or website.
                    </h3>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    What changes do we make?
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    Send us your document or website for review and we'll do our
                    magic to:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props}>
                    <li className={classes.descriptionDark}>
                      make information easy to read, find and understand
                    </li>
                    <li className={classes.descriptionDark}>
                      ensure consistent style and tonality
                    </li>
                    <li className={classes.descriptionDark}>
                      increase usability and navigation
                    </li>
                    <li className={classes.descriptionDark}>
                      improve design and layout
                    </li>
                    <li className={classes.descriptionDark}>
                      apply Clear Language Mark of approval
                    </li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    Basically, we reword and reorganize your content to make
                    sure your audience can:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props}>
                    <li className={classes.descriptionDark}>
                      find the information they need
                    </li>
                    <li className={classes.descriptionDark}>
                      understand the information they find
                    </li>
                    <li className={classes.descriptionDark}>
                      use the information they find to act on what they need
                    </li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h2 style={props} className={classes.subtitleDark}>
                    {" "}
                    Assistika writing techniques
                  </h2>
                )}
              </Spring>
            )}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    We've got some Assitika technical writing techniques down
                    our sleeve. And we master them very well.
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <h3 style={props} className={classes.descriptionDark}>
                    Here are some of our writing secrets:
                  </h3>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                delay={500}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translate3d(0,0px,0)"
                    : "translate3d(0,40px,0)",
                }}
              >
                {props => (
                  <ul style={props}>
                    <li className={classes.descriptionDark}>
                      logical organization of content with your audience in mind
                    </li>
                    <li className={classes.descriptionDark}>
                      easy-to-navigate design features
                    </li>
                    <li className={classes.descriptionDark}>
                      signposting and whitespace
                    </li>
                    <li className={classes.descriptionDark}>active voice</li>
                    <li className={classes.descriptionDark}>short sentences</li>
                    <li className={classes.descriptionDark}>
                      plain language and common words
                    </li>
                  </ul>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <div className={classes.space20}></div>

          {/* <h2 className={classes.subtitleDark}>OUR EDITING PROCESS</h2> */}
        </div>

        <div className={classes.space20}></div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(EditingReview)
