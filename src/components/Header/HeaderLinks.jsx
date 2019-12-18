/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import { Spring } from "react-spring/renderprops"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      delay={300}
      config={{ duration: 500 }}
    >
      {props => (
        <div style={props}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                noLiPadding
                buttonText="Services"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent",
                }}
                dropdownList={[
                  <Link
                    to="/technical-writing"
                    className={classes.dropdownLink}
                  >
                    Technical writing
                  </Link>,
                  <Link to="/editing-review" className={classes.dropdownLink}>
                    Editing and review
                  </Link>,
                  <Link to="/adopt" className={classes.dropdownLink}>
                    Adopt a technical writer from us
                  </Link>,
                  <Link to="/training" className={classes.dropdownLink}>
                    Training and consulting
                  </Link>,
                ]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <CustomDropdown
                noLiPadding
                buttonText="Expertise"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent",
                }}
                dropdownList={[
                  <Link
                    to="/documentation-deliverables"
                    className={classes.dropdownLink}
                  >
                    Documentation deliverables
                  </Link>,
                  <Link to="/industries" className={classes.dropdownLink}>
                    Industries we serve
                  </Link>,
                ]}
              />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/the-agency" className={classes.navLink}>
                The Agency
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/careers" className={classes.navLink}>
                Careers
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                style={{
                  borderRadius: "24px",
                  textTransform: "none",
                }}
                color="hireUs"
                target="_blank"
              >
                <Link
                  style={{ fontWeight: "450", fontSize: "15px" }}
                  to="/hire-us"
                >
                  Hire us
                </Link>
                <span className="loading-dots">
                  <span className="dot one">.</span>
                  <span className="dot two">.</span>
                  <span className="dot three">.</span>
                </span>
              </Button>
            </ListItem>
          </List>
        </div>
      )}
    </Spring>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
