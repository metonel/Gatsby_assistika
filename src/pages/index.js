import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
// import LandingPage from "./LandingPage/LandingPage.jsx"
// import ProfilePage from "./ProfilePage/ProfilePage.jsx"
// import LoginPage from "./LoginPage/LoginPage.jsx"
import Components from "./Components/Components.jsx"
import TheAgency from "./TheAgency/TheAgency.jsx"
import TechnicalWriting from "./EditingReview/EditingReview"
import EditingReview from "./EditingReview/EditingReview"
import DocumentationDeliverables from "./DocumentationDeliverables/DocumentationDeliverables"
import Adopt from "./Adopt/Adopt"
import Outsourcing from "./Outsourcing/Outsourcing"
import Outstaffing from "./Outstaffing/Outstaffing"
import Training from "./Training/Training"
import Careers from "./Careers/Careers"
import Industries from "./Industries/Industries"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      {/* <Route path="/login-page" component={LoginPage} /> */}
      <Route path="/the-agency" component={TheAgency} />
      <Route path="/technical-writing" component={TechnicalWriting} />
      <Route path="/editing-review" component={EditingReview} />
      <Route path="/adopt" component={Adopt} />
      <Route path="/outsourcing" component={Outsourcing} />
      <Route path="/outstaffing" component={Outstaffing} />
      <Route path="/training" component={Training} />
      <Route path="/careers" component={Careers} />
      <Route path="/industries" component={Industries} />
      <Route
        path="/documentation-deliverables"
        component={DocumentationDeliverables}
      />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
)
