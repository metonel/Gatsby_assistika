import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"
// pages for this product
import Components from "./Components/Components.jsx"
import LandingPage from "./LandingPage/LandingPage.jsx"
import ProfilePage from "./ProfilePage/ProfilePage.jsx"
import LoginPage from "./LoginPage/LoginPage.jsx"
import TheAgency from "./TheAgency/TheAgency.jsx"
import TechnicalWriting from "./EditingReview/EditingReview"
import EditingReview from "./EditingReview/EditingReview"
import DocumentationDeliverables from "./DocumentationDeliverables/DocumentationDeliverables"

let hist = createMemoryHistory()

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/the-agency" component={TheAgency} />
      <Route path="/technical-writing" component={TechnicalWriting} />
      <Route path="/editing-review" component={EditingReview} />
      <Route
        path="/documentation-deliverables"
        component={DocumentationDeliverables}
      />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
)
