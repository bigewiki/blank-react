import React from 'react';

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="row" id="homepage-cards">

        <div className="row col s12">
          <div className="homepage-main-wrapper card z-depth-3 hoverable">
            <center><i className="fa fa-clock-o" aria-hidden="true"></i></center>
            <h4>Coming Soon!</h4>
            <p>There's some potential here.</p>
          </div>
        </div>

        <div className="row">

          <div className="col s4">
            <a href="http://materializecss.com/" target="_blank"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-paint-brush"></i></center>
              <h4>Materialize</h4>
              <p>Materialize is the CSS framework this uses. Click here for the docs.</p>
            </div></a>
          </div>

          <div className="col s4">
            <a href="#"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-server"></i></center>
              <h4>React Router</h4>
              <p>Any component can be called if the URL matches. We can also set a miss which is like a catchall or 404. Example in the src/components/maindisplay.js file.</p>
            </div></a>
          </div>

          <div className="col s4">
            <a href="#"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-gears"></i></center>
              <h4>Functions</h4>
              <p>I use javascript/jquery functions exported in various files and imported where needed. For example I'm importing functions for the quote generator into src/components/footer.js from the functions.js file defined in there.</p>
            </div></a>
          </div>

        </div>

      </div>
    )
  }
}

export default ComingSoon;
