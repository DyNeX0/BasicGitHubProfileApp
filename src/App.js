import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Form from './Form.js';

const CardList = (props) => (
  <div>
    {props.profile.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>

);

class App extends Component {
  state = { profiles: [], title: "GitHub Card App"}
  addProfiles = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileData]
    }))
  }
  render(){
    return(
        <>
        <div className="header">{this.state.title}</div>
        <Form onSubmit={this.addProfiles}/>
        <CardList profile={this.state.profiles}/>
        </>
    );
  }
}

export default App;
