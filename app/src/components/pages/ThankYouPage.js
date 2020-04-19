import React, { Component } from "react";

export class ThankYouPage extends Component {
  
  total_number_completed = 399;
  user_progress = 3;
  img_str = "/images/mango/mango-0{0}.gif".format(this.user_progress)

  
  render() {
    return (
      <div class="sv_main sv_default_css">
        <form>
          <div class="sv_custom_header"></div>
          <div class="sv_container">
            <div>
            <img src={this.img_str} alt="test" class="center"/>
              <div class="sv_body sv_completed_page">
    <h3>Well done and thank you! You have finished {this.user_progress} / 5 surveys!</h3>
    <h2>There are {this.total_number_completed} surveys have been completed!</h2>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ThankYouPage;
