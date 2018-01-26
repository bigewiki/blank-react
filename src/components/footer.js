import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import { getQuote , showYear , getNewQuote } from '../script.js'
import HomePageFooterWidget from './homepagefooterwidget.js'

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer hoverable z-depth-3">
        <div className="container">
          <div className="row" id="footer-container">

            Footer content

            <div className="col s4 right black-text bottom">
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
