import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Booking from "./components/layout/Booking";
import Form from "./components/layout/Form";
import Login from "./components/layout/Login";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import HostelDetail from "./components/hostelDetail/HostelDetail";
import ModifiedForm from "./components/form/ModifiedForm";
import SignUp from "./components/form/SignUp";
import Upload from "./components/form/Upload";
import Contact from "./components/layout/Contact";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Alert />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/book' component={Booking} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/hosteldetail' component={HostelDetail} />
          <Route exact path='/addhostel' component={ModifiedForm} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/upload' component={Upload} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/hostel/:slug' component={HostelDetail} />
          {/* <Route exact path='/doc' component={MyDocument} /> */}
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
