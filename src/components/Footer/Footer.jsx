/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { List, ListItem, withStyles } from "@material-ui/core"
import { Spring, config } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <footer style={{ backgroundColor: "#1e1e1e" }} className={footerClasses}>
      <div className={classes.container}>
        {/* <div className={classes.left}></div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Asistika Technical Writing
          solutions
        </div> */}
        <h2 className={classes.text}>Let’s write something amazing together</h2>
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring
              delay={200}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate3d(0,0px,0)"
                  : "translate3d(0,40px,0)",
              }}
            >
              {props => (
                <h2 style={props} className={classes.mail}>
                  client@assistika.com
                </h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
