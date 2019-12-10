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
    marginBottom: "2.5em",
  },
  cardText: {
    opacity: ".75",
  },
  ...customCheckboxRadioSwitch,
}

export default basicsStyle
