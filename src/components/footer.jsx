import React, { Component } from "react";
import { Alert } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <Alert
        color="secondary"
        className="text-center"
        onClick={() =>
          window.open(
            "https://gitlab.com/veddandekar6/coronaStats-India",
            "_blank"
          )
        }
      >
        Made with{" "}
        <img
          class="emoji"
          alt="heart"
          height="20"
          width="20"
          src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        />{" "}
        during quarantine
      </Alert>
    );
  }
}

export default Footer;
