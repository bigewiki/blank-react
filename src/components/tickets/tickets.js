import React from 'react';

class ComingSoon extends React.Component {
  render() {
    return (
      <div className="row" id="homepage-cards">

        <div className="row col s12">
          <div className="homepage-main-wrapper card z-depth-3 hoverable">
            <center><i className="fa fa-clock-o" aria-hidden="true"></i></center>
            <h4>Coming Soon!</h4>
            <p>Sorry this isn't ready yet. Keep checking back!</p>
          </div>
        </div>

        <div className="row">

          <div className="col s3">
            <a href="#"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-th"></i></center>
              <h4>One</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div></a>
          </div>

          <div className="col s3">
            <a href="#"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-server"></i></center>
              <h4>Two</h4>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div></a>
          </div>

          <div className="col s3">
            <a href="/design/"><div className="homepage-card-wrapper card z-depth-3 hoverable">
              <center><i className="fa fa-paint-brush"></i></center>
              <h4>Three</h4>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

export default ComingSoon;
