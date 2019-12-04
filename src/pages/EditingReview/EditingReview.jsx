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

import editingReviewStyle from "assets/jss/material-kit-react/views/editingReview"

class EditingReview extends React.Component {
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
            <div className={classes.brand}>
              <h1 className={classes.title}>Editing services</h1>
              <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>
                Is your message clear enough for your customers?
              </h2>
              <h3 className={classes.description}>
                Assistika's editing service upgrades your existing content to a
                very high standard of clairty. Basically, we make sure your
                audience finds your content easy to read and understand and can
                act upon it on first reading.
              </h3>
              <h3 className={classes.description}>
                Our technical writers check your documents or website for
                language accessibility, navigation, design and layout. If the
                content is not clear enough, we send you a cost estimate of any
                necessary editing. If you need, we can first send you a free
                sample edit to help you start the process.
              </h3>
              <h3 className={classes.description}>
                After editing, we send you your upgraded content with an
                individually numbered CLEAR LANGUAGE approval mark. The CLEAR
                LANGUAGE MARK is Assistika's seal of approval for the clarity of
                a document or website. You can add this Clear Language mark on
                your website or documents. This will show the world that you are
                commited to get your message across to your audience.
              </h3>

              <div className={classes.space20}></div>
              <h2 className={classes.subtitle}>Document types</h2>
              <h3 className={classes.description}>
                We rewrite content and improve the design and layout of
                documents to make sure they are crystal-clear for your audience.
                From short messages and leaflets to annual reports, training
                manuals and websites. We turn any complex concepts into
                ingeniously simple information.
              </h3>
            </div>
            <div className={classes.scrollDown}>
              <i className="fas fa-arrow-down"></i>scroll for more
            </div>
          </div>
        </Parallax>

        <div className={classes.main}>
          <div className={classes.space20}></div>
          <h1 className={classes.titleDark}>Clear Language Standard</h1>

          <div className={classes.space20}></div>
          <h2 className={classes.subtitleDark}>
            SHOW YOUR COMMITMENT TO CLEAR COMMUNICATION
          </h2>
          <h3 className={classes.descriptionDark}>
            If your organisation is making an effort to communicate your message
            clearly, why not tell people? After reviewing your documents,
            Assistika can add the Clear Language Mark on each website and
            printed document that meets internationally accepted plain language
            standards.
          </h3>
          <h3 className={classes.descriptionDark}>
            The Clear Language mark gives independent proof that your content
            meets a high standard of clarity. This means that your public can
            understand and act on your message after just one reading.
          </h3>

          <h2 className={classes.subtitleDark}>
            HOW TO GET THE CLEAR LANGUAGE STANDARD MARK
          </h2>

          <h3 className={classes.descriptionDark}>
            The CLEAR LANGUAGE MARK is Assistika's seal of approval for the
            clarity of a document or website. The mark ensures that your
            audience will find your content easy to read and understand.
          </h3>
          <h3 className={classes.descriptionDark}>
            If your document or website is up to our standards, we will send you
            our CLEAR LANGUAGE approval. You can use the Clear LANGUAGE logo on
            your website or documents to show the world that you are commited to
            get your message across to your audience.
          </h3>
          <h3 className={classes.descriptionDark}>
            If your document is not clear enough, we will send you an estimate
            of the cost of any necessary editing. We can also send you a free
            sample edit to help you start the process. Once you have accepted
            our editing estimate, we will edit your document so that it meets
            CLEAR LANGUAGE standard and send you your individually numbered
            CLEAR LANGUAGE mark to use on the document or website.
          </h3>

          <h2 className={classes.subtitleDark}>What changes do we make?</h2>
          <h3 className={classes.descriptionDark}>
            Send us your document or website for review and we'll do our magic
            to:
          </h3>
          <ul className={classes.descriptionDark}>
            <li>Enhance language accessibility</li>
            <li>Increase usability and navigation</li>
            <li>Improve design and layout</li>
          </ul>
          <h3 className={classes.descriptionDark}>
            Basically, we reword and reorganize your content to make sure your
            audience can:
          </h3>
          <ul className={classes.descriptionDark}>
            <li>Find the information they need</li>
            <li>Understand the information they find</li>
            <li>Use the information they find to act on what they need</li>
          </ul>
          <h2 className={classes.subtitleDark}>Assistika writing techniques</h2>
          <h3 className={classes.descriptionDark}>
            We've got some Assitika technical writing techniques down our
            sleeve. And we master them very well. Here are some of our writing
            secrets:
          </h3>
          <ul className={classes.descriptionDark}>
            <li>Logical organization of content with your audience in mind</li>
            <li>Easy-to-navigate design features</li>
            <li>“You” and other pronouns</li>
            <li>Active voice</li>
            <li>Short sentences</li>
            <li>Plain language and common words</li>
          </ul>
        </div>

        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(EditingReview)
