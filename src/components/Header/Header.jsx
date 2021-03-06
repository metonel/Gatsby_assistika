import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
// @material-ui/icons
import Menu from "@material-ui/icons/Menu"
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx"

import { Spring } from "react-spring/renderprops"

import { Link } from "gatsby"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.headerColorChange = this.headerColorChange.bind(this)
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  componentDidMount() {
    document.body.getElementsByTagName("header")[0].classList.add("black")
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange)
    }
  }
  headerColorChange() {
    const logoA = require("assets/img/aLogoA.svg")
    const logoB = require("assets/img/aLogo.svg")
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = typeof window !== "undefined" && window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color])
      document.body.getElementsByTagName("header")[0].classList.remove("black")
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color])
      document.body.getElementsByTagName("header")[0].classList.add("white")
      document.getElementById("logo").src = logoB
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color])
      document.body.getElementsByTagName("header")[0].classList.add("black")
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color])
      document.body.getElementsByTagName("header")[0].classList.remove("white")
      document.getElementById("logo").src = logoA
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", this.headerColorChange)
    }
  }
  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      fixed,
      absolute,
    } = this.props
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    })
    const brandComponent = (
      <div>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
          to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
          // delay={}
          config={{ duration: 500 }}
        >
          {props => (
            <div style={props} className="logo">
              <Link to="/">
                <img
                  id="logo"
                  style={{ height: "45px" }}
                  src={require("assets/img/aLogoA.svg")}
                  alt=""
                />
              </Link>
            </div>
          )}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={500}
          config={{ duration: 500 }}
        >
          {props => (
            <div style={props} className="subtext">
              {/* <Link to="/"> */}
              Technical writing solutions
              {/* </Link> */}
            </div>
          )}
        </Spring>
      </div>
    )
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={(classes.appResponsive, "white")}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.defaultProp = {
  color: "white",
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
}

export default withStyles(headerStyle)(Header)
