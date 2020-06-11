import React, { Component } from 'react';

class Btnshare extends Component {
    render() {
        return (
            <div class="ui labeled button segments">
            <button class="ui blue basic button" tabindex="0">
              <i aria-hidden="true" class="fork icon"></i>
              Fork
            </button>
            <a class="ui blue left pointing basic label">2,048</a>
          </div>
        

        );
    }
}

export default Btnshare;