import React from 'react';

import NavBar from './navbar.js'
import MainDisplay from './maindisplay.js'
import Footer from './footer.js'


class App extends React.Component {
  constructor() {
    super();

    window.addEventListener("load", function() {
      document.getElementById("bestpractice-focus").style.display="block";
    });
  }


  render() {
    return (
      <div className="app-wrapper">
        <body>
        <header>
          <NavBar />
        </header>



        <main>
          <MainDisplay/>
        </main>

        <Footer />
      </body>

      </div>
    )
  }
}

export default App;
