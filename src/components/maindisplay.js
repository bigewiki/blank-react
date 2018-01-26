import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import HomePage from './homepage.js'
import NotFound from './notfound.js'
import ComingSoon from './comingsoon.js'

class MainDisplay extends React.Component {
  render() {
    return (
      <div className="row">
        <BrowserRouter>
          <div>
          {/* <Match exactly pattern="/" component={HomePage} /> */}
          <Match exactly pattern="/design/" component={ComingSoon} />
          <Match exactly pattern="/" component={ComingSoon} />
          <Miss component={NotFound} />
          </div>
         </BrowserRouter>
      </div>
    )
  }
}

export default MainDisplay;
