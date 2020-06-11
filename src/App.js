import React, { Component } from "react";
import Navbar from "./component/Navbar";
import  Sidebarr  from "./component/sidebar"
import Page from "./component/page";
import Freinds from "./component/Freinds";
import Btnlike from "./component/btnlike";
import Btnshare from "./component/Btnshare";

class App extends Component {
  render() {
    return (
      <div>
        <div class="ui celled grid">
          <div class="row">
            <div class="three wide column">
            <Sidebarr />
            </div>
            <div class="thirteen wide column">
              <Navbar />
            </div>
          </div>
          <div class="row">
            <div class="three wide column ">
              <Btnlike />
              <Btnshare />
            </div>
            <div class="ten wide column">
            <Freinds />
              
            </div>
            <div class="three wide column">
            <Page />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
