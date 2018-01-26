import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import { getQuote , showYear , getNewQuote } from '../functions.js'
import HomePageFooterWidget from './homepagefooterwidget.js'

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer hoverable z-depth-3">
        <div className="container">
          <div className="row" id="footer-container">
            <div className="col s8 black-text bottom">
              <p>
                React has a quirk that you don't define classes in markup with class but instead with className. For example:<br/>
              	<strong>&lt;div className="container"&gt;</strong>
                <br/><br/>
                You're also not allowed to not close elements. For example <strong>&lt;br/&gt; is okay and &lt;br&gt; is not.</strong>
                <br/><br/>
                You must have a parent element wrapping everything withing a component. Easy solution is to just wrap everything in a div.
              </p>
            </div>
            <div className="col s4 black-text bottom">
              <a href="#generate-quote" id="generate-quote" className="tooltipped" data-position="top" data-delay="50" data-tooltip="Generate a random quote" onClick={getNewQuote}><i className="fa fa-refresh" aria-hidden="true" title=""></i></a> <span id="quote-area">{getQuote()}</span>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container black-text text-lighten-3">
          &copy; {showYear()} &bull; Professional Services
          <div className="black-text text-lighten-4 right" href="#!">A ProServe Production</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
