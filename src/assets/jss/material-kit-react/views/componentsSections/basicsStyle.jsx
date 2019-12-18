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
  subtitleDark: {
    maxWidth: "80vw",
    paddingTop: "7px",
    fontWeight: "400",
    color: "#4a4a4a",
    fontSize: "1.8rem",
    fontWeight: "400",
    margin: "10px 0 0",
  },
  descriptionDark: {
    color: "#4a4a4a",
    fontWeight: "400",
    fontSize: "1.1rem",
    margin: "10px 0 0",
  },
  ...customCheckboxRadioSwitch,
}

export default basicsStyle
