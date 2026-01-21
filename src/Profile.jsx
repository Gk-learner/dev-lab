import React, { Component } from 'react';
import './profile.css';

const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBio: true
    }
  }
    handleClick = () => {
      this.setState((prevState) => ({
        showBio: !prevState.showBio
      }));
    }
  
  render() {
        const { showBio } = this.state;

    return (
      <div className="user-profile"> 
      <img className="profile-img" src={user.image} alt="user-image" height= "40px" width="40px"/>
        <h2>{user.name}</h2>
        <button onClick={this.handleClick}>{showBio ? "Show Bio" : "Hide Bio"}</button>
        {!showBio && (<p>{user.bio}</p>)}
      </div>
    );
  }
}

export default UserProfile;
