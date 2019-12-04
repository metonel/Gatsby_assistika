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

class TechnicalWriting extends React.Component {
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
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <h2 className={classes.description}>
                  Outsource the development and maintenance of your technical
                  documentation to us.
                </h2>
                <h2 className={classes.description}>
                  We give you the right technical writers, with the right skills
                  for your business.
                </h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <h2 className={classes.description}>We're the best at:</h2>
                <ul className={classes.description}>
                  <li>WEB-BASED ONLINE HELP SYSTEMS</li>
                  <li>PRINT-BASED USER GUIDES</li>
                  <li>API DOCUMENTATION</li>
                  <li>EDITING & REVIEWING</li>
                  <li>UX UI REVIEW</li>
                  <li>TUTORIALS & WALKTHROUGHS</li>
                  <li>POLICY, COMPLIANCE & AUDIT DOCUMENTS</li>
                  <li>RESUME WRITING</li>
                  <li>MARKETING MATERIALS</li>
                </ul>
              </GridItem>
            </GridContainer>
            <div className={classes.space20}></div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.subtitle}>
                  Your extended tech writing team
                </h2>
                <h2 className={classes.description}>
                  Sometimes you don't want to be stuck with a technical writer
                  forever. For project-based technical writers staffing, partner
                  with Assistika.
                </h2>
                <h2 className={classes.description}>
                  We can help you meet changing project demands without the cost
                  and liabilities of additional full time employees.
                </h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.subtitle}>
                  Adopt a technical writer from us
                </h2>
                <h2 className={classes.description}>
                  Assistika assigns one writer or an entire team to work with
                  you on your project.You keep them for as long as you need
                  their help with documenting your products or processes.
                </h2>
                <h2 className={classes.description}>
                  They'll keep you regularly updated to ensure the documentation
                  is ready when your product is ready for release.
                </h2>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} lg={4}>
                <h2 className={classes.subtitle}>On-site or online</h2>
                <h2 className={classes.description}>
                  Full-time or part-time technical writers, on your premises or
                  online.
                </h2>
                <h2 className={classes.description}>
                  All projects are supervised by senior Assistika staff.
                </h2>
              </GridItem>
            </GridContainer>
            <div className={classes.scrollDown}>
              <i className="fas fa-arrow-down"></i>scroll for more
            </div>
          </div>
        </Parallax>

        <div className={classes.main}>
          <h2 className={classes.subtitleDark}>
            We deliver great product documentation.
          </h2>
          <h2 className={classes.descriptionDark}>
            Our expert technical authors develop information that is easy to
            find, read and understand. We create documentation that:
          </h2>
          <ul className={classes.descriptionDark}>
            <li>explains your product functionality</li>
            <li>markets your product</li>
            <li>
              reduces helpdesk calls by answering all your customers' questions
            </li>
          </ul>

          <h2 className={classes.subtitleDark}>
            Contract vs hired technical writers
          </h2>
          <h2 className={classes.descriptionDark}>
            The flexibility and scalability that contract staffing provides can
            help drive your business growth strategy. Here are a few more
            reasons why contract staffing a technical writer for your team is a
            great idea.
          </h2>
          <ul className={classes.descriptionDark}>
            <li>Handle Rapid Project Growth or Expansion</li>
            <li>Reduce training costs</li>
            <li>Keeps the focus on your core business</li>
            <li>Expert competencies and specialized skills</li>
            <li>Project-based or seasonal needs</li>
          </ul>

          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>International communication</h2>
          <h2 className={classes.descriptionDark}>
            Reduce your translation costs
          </h2>
          <h2 className={classes.descriptionDark}>
            Will your content be translated into multiple languages? Here's how
            we can reduce your translation costs:
          </h2>
          <ul className={classes.descriptionDark}>
            <li>Use simplified language that is easy to translate</li>
            <li>Edit content translated from other languages</li>
          </ul>

          <h2 className={classes.subtitleDark}>Training</h2>
          <h2 className={classes.descriptionDark}>
            We offer training to give you the know-how and skills to write and
            edit your own printed or online information.
          </h2>

          <div className={classes.space20}></div>

          <h3 className={classes.subtitleDark}>How we work</h3>
          <h4 className={classes.descriptionDark}>
            Assistika is the perfect solution when hiring an in-house technical
            writer is not right option for your company.
          </h4>
          <h4 className={classes.descriptionDark}>
            Here's an overview of our process:
          </h4>

          <GridContainer>
            <GridItem xs={12} sm={12} md={3} lg={3}>
              <div className={classes.descriptionDark}>
                <h5 style={{ color: "blue" }}>
                  1. We assess project, schedule & price
                </h5>
                <h5 style={{}}>
                  To establish a project plan, we first ask stakeholders
                  questions like:
                </h5>
                <h5 style={{}}>- What content shoud we create and why?</h5>
                <h5>- Who are the end-users?</h5>
                <h5>
                  - What are your deadlines and how do we integrate with your
                  release schedule?
                </h5>
                <h5>
                  - What existing knowledge alredy exists within your
                  organization?
                </h5>
                <h5>
                  - Who are the SMEs (Subject Matter Experts) who will work with
                  us and how available are they?
                </h5>
                <h5>- What other resources can we access?</h5>
                <h5>
                  At this point we might be able to give you a ballpark price
                  and schedule for your project. If the parameters make sense,
                  then we schedule a meeting.
                </h5>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} lg={3}>
              <div className={classes.descriptionDark}>
                <h5 style={{ color: "blue" }}>2. We gather information</h5>
                <h5 style={{}}>
                  We meet on-site or online to get an overview of the system we
                  are documenting.
                </h5>
                <h5>
                  We meet on-site or online to get an overview of the system we
                  are documenting.
                </h5>
                <h5>
                  We check any background materials you may have, such as
                  technical specifications or other requirement documents.
                </h5>
                <h5>
                  We look at any existing older versions, presentations,
                  internal drafts or any other information we can use as a basis
                  for the documentation deliverables.
                </h5>
                <h5>
                  We check out demos, meet members of your team, brainstorm with
                  SMEs (Subject Matter Experts).
                </h5>
                <h5>
                  If required, you give us access to a sandbox system to
                  test-drive your product, take screenshots, and understand how
                  your product works.
                </h5>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} lg={3}>
              <div className={classes.descriptionDark}>
                <h5 style={{ color: "blue" }}>3. We create</h5>
                <h5 style={{}}>
                  We start writing content based on the outlines agreed during
                  project planning
                </h5>
                <h5 style={{}}>
                  We draft text and add any required screenshots, diagrams,
                  tutorials and videos.
                </h5>
                <h5 style={{}}>
                  We regularly submit partial drafts for SME review and
                  implement feedback.
                </h5>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} lg={3}>
              <div className={classes.descriptionDark}>
                <h5 style={{ color: "blue" }}>4. You approve</h5>
                <h5 style={{}}>
                  We finalize the documentation based on your review and we
                  distribute the final content.
                </h5>
                <h5 style={{}}>
                  We keep in touch as your go-to contact for quick text reviews.
                  We'll be glad to double-check an email for you or explain from
                  a user perspective how to use
                </h5>
                <h5 style={{}}>
                  We've already gone through the learning curve together, so
                  we're ready to partner up with you for more documentation
                  assignements
                </h5>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(technicalWritingStyle)(TechnicalWriting)
