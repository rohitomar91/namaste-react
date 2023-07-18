import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        location: "",
        contact: "",
        avatar: "",
      },
    };
    console.log("constructor");
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/rohitomar91");
    const data = await response.json();
    this.setState({
      user: data,
    });

    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.user;
    console.log("render");
    return (
      <div>
        <h1>About</h1>
        <UserClass
          name={name}
          location={location}
          contact={login}
          avatar={avatar_url}
        />
      </div>
    );
  }
}

export default About;
