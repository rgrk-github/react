import UserClass from "./../UserClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("About Us Constructor");
  }

  componentDidMount() {
    console.log("About Us componentDidMount");
  }
  render() {
    console.log("About Us Render");

    return (
      <div className="aboutus-container">
        <h1>About Us</h1>
        <UserClass prop1="Raja1"></UserClass>
      </div>
    );
  }
}

export default AboutUs;
