import React, { Component } from "react";

export class ThankYouPage extends Component {
  total_number_completed = 399;
  user_progress = 3;
  img_str = "/images/mango/mango-0{0}.gif".format(this.user_progress);

  render() {
    return (
      <div style={{ backgroundColor: "#FFCC80" }}>
        <div style={{ fontFamily: "Segoe UI", fontSize: "36px" }}><b>Fill out the basket to help us Donate 200 Masks to the Hospital</b></div>
      </div>
    );
  }
}

export default ThankYouPage;
