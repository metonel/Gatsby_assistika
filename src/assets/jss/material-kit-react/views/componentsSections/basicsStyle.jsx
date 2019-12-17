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
  space20: {
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
  iconPlain: {
    width: "58.5px",
    height: "58.5px",
    marginBottom: "1em",
  },
  cardText: {
    fontSize: "1.2rem",
    fontWeight: "400",
    opacity: ".75",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  ...customCheckboxRadioSwitch,
}

export default basicsStyle
