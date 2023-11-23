import React from "react";
import UserContext from "../utils/UserContext";
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
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/rohitomar91");
    const data = await response.json();
    this.setState({
      user: data,
    });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.user;
    return (
      <div className="p-4">
        <h1>About</h1>
        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="text-xl font-bold"> {loggedInUser}</span>
            )}
          </UserContext.Consumer>
        </div>
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
