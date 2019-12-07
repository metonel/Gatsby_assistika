/*eslint-disable*/
import React from "react"
// react components for routing our app without refresh
import { Link } from "gatsby"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Tooltip from "@material-ui/core/Tooltip"

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons"

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx"
import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/technical-writing" className={classes.dropdownLink}>
              Technical Writing
            </Link>,
            <Link to="/editing-review" className={classes.dropdownLink}>
              Editing and Review
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
          buttonIcon={Apps}
          dropdownList={[
            <Link
              to="/documentation-deliverables"
              className={classes.dropdownLink}
            >
              Documentation deliverables
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Industries we serve
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        {/* <Button color="transparent" target="_blank" className={classes.navLink}> */}
        <Link to="/the-agency" className={classes.navLink}>
          The Agency
        </Link>
        {/* </Button> */}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/the-agency">
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Careers
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          style={{ borderRadius: "24px" }}
          // href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          // className={classes.navLink}
          color="info"
        >
          {/* <CloudDownload className={classes.icons} /> Download */}
          Hire us
          <span class="loading-dots">
            <span class="dot one">.</span>
            <span class="dot two">.</span>
            <span class="dot three">.</span>
          </span>
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/the-agency"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Link
              // style={{ color: "white" }}
              to="/the-agency"
            >
              Careers
            </Link>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <FaFacebook />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={
            typeof window !== "undefined" && window.innerWidth > 959
              ? "top"
              : "left"
          }
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <FaInstagram />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
