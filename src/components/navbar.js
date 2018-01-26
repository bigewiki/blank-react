import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className="row top-nav">
        <div className="col s12">
          <div className="col s12 hoverable z-depth-3 title-wrapper valign-wrapper nav-block">
            <h2 className="title-space"><a href="/">
              Professional Services</a>
            </h2>
            {/* <ul className="right col s6">
              <li className="nav-link"><a href="quickref">QuickRef</a></li>
              <li className="nav-link"><a href="/design">Design</a></li>
              <li className="nav-link"><a href="/vdeck">vDeck</a></li>
              <li className="nav-link"><a href="/bluehost">BlueHost</a></li>
            </ul> */}
          </div>
         </div>
      </div>
    )
  }
}

export default NavBar;
