import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, location, contact, avatar } = this.props;

    return (
      <div className="user-card">
        <div>
          <img className="user-avatar" src={avatar} />
        </div>
        <div>
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: {contact}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
