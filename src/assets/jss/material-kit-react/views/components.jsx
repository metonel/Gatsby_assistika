import { container } from "assets/jss/material-kit-react.jsx"

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    paddingLeft: "20px",
    color: "white",
    fontSize: "3.8rem",
    fontWeight: "450",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    paddingLeft: "20px",
    fontSize: "1.313rem",
    fontWeight: "400",
    // maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    padding: "39px 35px 25px 35px",
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
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  scrollDown: {
    color: "white",
    position: "absolute",
    width: "100%",
    bottom: "65px",
    left: "0",
    padding: "0 1px 0 5vw",
  },
}

export default componentsStyle
