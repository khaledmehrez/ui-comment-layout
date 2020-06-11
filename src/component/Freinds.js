import React, { Component } from "react";
import profile1 from "../img/profile1.jpg"
import profile2 from "../img/profile2.jpg"
import profile3 from "../img/profile3.jpg"
import "./freinds.css"
class Freinds extends Component {
  render() {
    return (
      <div>
        <div>
          <a class="ui blue image label test">
            <img src={profile1} />
            Veronika
            <div class="detail">Friend</div>
          </a>
          <a class="ui teal image label">
            <img src={profile2} />
            Veronika
            <div class="detail">Friend</div>
          </a>
          <a class="ui yellow image label">
            <img src={profile3} />
            Helen
            <div class="detail">Co-worker</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Freinds;
