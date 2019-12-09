import { container, title } from "assets/jss/material-kit-react.jsx"

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx"

const technicalWriting = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    padding: "35px 5px 20px 20px 20px",
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  space20: {
    height: "20px",
    display: "block",
  },
  space30: {
    height: "30px",
    display: "block",
  },
  title: {
    paddingLeft: "20px",
    textAlign: "center",
    color: "white",
    fontSize: "3.8rem",
    fontWeight: "400",
    position: "relative",
  },
  subtitle: {
    paddingLeft: "20px",
    color: "white",
    fontSize: "1.8rem",
    margin: "10px 0 0",
  },
  subtitleDark: {
    color: "black",
    fontSize: "1.8rem",
    margin: "10px 0 0",
  },
  description: {
    paddingLeft: "20px",
    color: "white",
    fontSize: "1.1rem",
    margin: "10px 0 0",
  },
  descriptionDark: {
    color: "black",
    fontSize: "1.1rem",
    margin: "10px 0 0",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  iconPlain: {
    width: "58.5px",
    height: "58.5px",
    marginBottom: "2.5em",
  },
  scrollDown: {
    color: "white",
    position: "absolute",
    width: "100%",
    bottom: "65px",
    left: "0",
    padding: "0 1px 0 5vw",
  },
  imag: {
    color: "white",
    position: "absolute",
    width: "100%",
    bottom: "65px",
    right: "0",
    padding: "0 1px 0 5vw",
  },
}

export default technicalWriting
