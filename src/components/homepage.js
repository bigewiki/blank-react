import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div className="row" id="homepage-cards">

        <div className="row col s12">
          <div className="homepage-main-wrapper card z-depth-3 hoverable">
            <h4>Welcome to ProServe HQ!</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="row">

          <div className="col s3">
            <a href="/bluehost/"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-th"></i></center>
              <h4>BlueHost</h4>
              <p>This includes HostMonster, JustHost and FastDomain.</p>
            </div></a>
          </div>

          <div className="col s3">
            <a href="/vdeck/"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-server"></i></center>
              <h4>vDeck</h4>
              <p>iPage, iPower, FatCow, Verio, etc.</p>
            </div></a>
          </div>

          <div className="col s3">
            <a href="/design/"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-paint-brush"></i></center>
              <h4>Design</h4>
              <p>Tools/Resources</p>
            </div></a>
          </div>

          <div className="col s3">
            <a href="/quickref/"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-wrench"></i></center>
              <h4>QuickRef</h4>
              <p>These are tools that ProServe uses.</p>
            </div></a>
          </div>

        </div>

      </div>
    )
  }
}

export default HomePage;
