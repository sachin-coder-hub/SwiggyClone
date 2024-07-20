import User from "./User";
import UserClass from "./userClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Hi there! Welcome to Swiggy!!</h2>
        <UserClass name={"First child"} location={"Karnataka"} />
      </div>
    );
  }
}

export default About;
