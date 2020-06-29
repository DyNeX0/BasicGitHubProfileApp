import React, { Component } from 'react'
import './Card.css'
class Card extends Component {
    render(){
      const profile=this.props;
      return(
        <div className="github-profile">
          <img id="pp" src={profile.avatar_url}/>
          <div className="info">
            <div className="name">{profile.name ? profile.name: "No Name Currently"}</div>
            <div className="company">{profile.company ? profile.company: "Not Empolyed"}</div>
          </div>
        </div>
      );
    }
  }
  export default Card;