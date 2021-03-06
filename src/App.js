import React from 'react';
import Header from './Header';

import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginButton from './LoginButton';
import BestBooks from './BestBooks'

import Profile from './Profile'

import { withAuth0 } from "@auth0/auth0-react";




class App extends React.Component {

  render() {
    console.log('app', this.props);
    let isAuthenticated = this.props.auth0.isAuthenticated;
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {
                
                isAuthenticated ?<BestBooks/>: <LoginButton/>
                
                /* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
            
              { 
               <Route exact path="/Profile">
              <Profile/>
            </Route>

            /* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
