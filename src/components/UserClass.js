import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // your state properties
      userInfo: {
        name: "rk",
        location: "de",
      },
    };
  }

  async componentDidMount() {
    const github_user_endpoint = "https://api.github.com/users/rgrk-github";
    const response = await fetch(github_user_endpoint);
    const json = await response.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    console.log(this.props.prop1 + " User Render");

    const { name, location } = this.state.userInfo;
    const { prop1 } = this.props;

    return (
      <div className="user-card">
        <p>
          UserName : {name} |<span>Location : {location}</span>
        </p>
        <p>Email : raja@gmail.com | Ph: 224-304-6397</p>
      </div>
    );
  }
}

export default UserClass;
