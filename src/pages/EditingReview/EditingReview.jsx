import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

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

        <Parallax bColor="#46aa54">
          <div style={{ paddingTop: "20px" }} className={classes.container}>
            <div className={classes.brand}>
              <h1 className={classes.title}>Editing and reviewing</h1>
              <div className={classes.space20}></div>
              <h3 className={classes.subtitle}>
                We rewrite content and improve the layout of documents and
                websites.
              </h3>
              <h3 className={classes.subtitle}>
                Our magic turns complex information into ingeniously simple
                messages.
              </h3>
            </div>
            <div className={classes.imag}>
              <img
                style={{ width: "700px", float: "right" }}
                src={require("assets/img/editing.png")}
                alt=""
              />
            </div>
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

          <h2 className={classes.subtitleDark}>
            IS YOUR MESSAGE CLEAR ENOUGH FOR YOUR CUSTOMERS?
          </h2>
          <h3 className={classes.descriptionDark}>
            Assistika's editing service upgrades your existing content to a very
            high standard of clairty. Basically, we make sure your audience
            finds your content easy to read and understand and can act upon it
            on first reading.
          </h3>
          <h3 className={classes.descriptionDark}>
            Our technical writers check your documents or website for language
            accessibility, navigation, design and layout. If the content is not
            clear enough, we send you a cost estimate of any necessary editing.
            If you need, we can first send you a free sample edit to help you
            start the process.
          </h3>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>CLEAR LANGUAGE STANDARD</h2>
          <h3 className={classes.descriptionDark}>
            After editing, we send you your upgraded content with an
            individually numbered CLEAR LANGUAGE approval mark. The CLEAR
            LANGUAGE MARK is Assistika's seal of approval for the clarity of a
            document or website.
          </h3>
          <h3 className={classes.descriptionDark}>
            You can add this Clear Language mark on your website or documents.
            This will show the world that you are commited to get your message
            across to your audience.
          </h3>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>
            SHOW YOUR COMMIITMENT TO CLEAR COMMUNICATION
          </h2>
          <h3 className={classes.descriptionDark}>
            If your organisation is making an effort to communicate your message
            clearly, why not tell people?
          </h3>
          <h3 className={classes.descriptionDark}>
            After reviewing your documents, Assistika can add the Clear Language
            Mark on each website and printed document that meets internationally
            accepted plain language standards.
          </h3>
          <h3 className={classes.descriptionDark}>
            The Clear Language mark gives independent proof that your content
            meets a high standard of clarity. This means that your public can
            understand and act on your message after just one reading.
          </h3>
          <div className={classes.space20}></div>

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
            sample edit to help you start the process.
          </h3>
          <h3 className={classes.descriptionDark}>
            Once you have accepted our editing estimate, we will edit your
            document so that it meets CLEAR LANGUAGE standard and send you your
            individually numbered CLEAR LANGUAGE mark to use on the document or
            website.
          </h3>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>WHAT CHANGES DO WE MAKE?</h2>
          <h3 className={classes.descriptionDark}>
            Send us your document or website for review and we'll do our magic
            to:
          </h3>
          <ul className={classes.descriptionDark}>
            <li>Make information easy to read, find and understand</li>
            <li>Ensure consistent style and tonality</li>
            <li>Increase usability and navigation</li>
            <li>Improve design and layout</li>
            <li>Apply Clear Language Mark of approval</li>
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
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>
            ASSSISTIKA WRITING TECHNIQUES
          </h2>
          <h3 className={classes.descriptionDark}>
            We've got some Assitika technical writing techniques down our
            sleeve. And we master them very well.
          </h3>
          <h3 className={classes.descriptionDark}>
            Here are some of our writing secrets:
          </h3>
          <ul className={classes.descriptionDark}>
            <li>Logical organization of content with your audience in mind</li>
            <li>Easy-to-navigate design features</li>
            <li>Signposting and whitespace</li>
            <li>Active voice</li>
            <li>Short sentences</li>
            <li>Plain language and common words</li>
          </ul>
          <div className={classes.space20}></div>

          <h2 className={classes.subtitleDark}>OUR EDITING PROCESS</h2>
        </div>

        <div className={classes.space20}></div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(editingReviewStyle)(EditingReview)
