import { container, title } from "assets/jss/material-kit-react.jsx"
import customCheckboxRadioSwitch from "assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx"

const basicsStyle = {
  sections: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space30: {
    height: "20px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  card1: {
    minHeight: "480px",
    padding: "2.9em 55px 4.5em",
    color: "black",
    border: "solid 1px #ededed",
    borderRadius: "5px",
  },
  card2: {},
  // linkWrapper: {
  //   // float: "left",
  //   // width: "50%",
  //   padding: "1.1em 15px",
  // },
  iconPlain: {
    width: "58.5px",
    height: "58.5px",
    marginBottom: "2.5em",
  },
  cardText: {
    opacity: ".75",
  },
  ...customCheckboxRadioSwitch,
}

export default basicsStyle
