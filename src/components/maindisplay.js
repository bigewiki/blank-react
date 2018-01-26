import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Tickets from './tickets/tickets.js'

class MainDisplay extends React.Component {
  render() {
    return (
      <div className="row">
        <BrowserRouter>
          <div>
          {/* <Match exactly pattern="/" component={HomePage} /> */}
          <Match exactly pattern="/" component={Tickets} />
          <Miss component={Tickets} />
          </div>
         </BrowserRouter>
      </div>
    )
  }
}

export default MainDisplay;
