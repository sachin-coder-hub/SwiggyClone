import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar: "avatar_url",
      },
    };
  }
  async componentDidMount() {
    console.log(this.props.name + " Component Did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const user = await data.json();
    this.setState({
      userInfo: user,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.props.name + " render");
    return (
      <div className="userCard">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9876543210</h4>
      </div>
    );
  }
}

export default UserClass;
