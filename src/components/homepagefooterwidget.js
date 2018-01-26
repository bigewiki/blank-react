import React from 'react';


class HomePageFooterWidget extends React.Component {

  render() {
    return (
      <div>
      <h5 className="black-text">Need Help? Have Questions?</h5>
      <div className="col s6">
          <table className="black-text">
                <tbody>
            <tr>
              <td>
                <a href="#"  className="tooltipped" data-position="top" data-delay="50" data-tooltip="We are available Monday-Friday, 7:00AM - 6:00PM">
                <div className="chip hoverable z-depth-3"><i className="fa fa-th" aria-hidden="true"></i> BlueHost HipChat</div>
                </a>
              </td>
              <td>Migration Team (Professional Services)</td>
            </tr>
            <tr>
              <td>
                <a href="#"  className="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Please advise customers to email us directly"><div className="chip hoverable z-depth-3"><i className="fa fa-server" aria-hidden="true"></i>
              <strong> vDeck HipChat</strong></div></a>
              </td>
              <td>Proserve</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default HomePageFooterWidget;
