import React, {useState, Component} from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';





class App extends React.Component {
  state = {
    profiles: [],
  };
  /* The below function passes profileData as an argument. This profileData is brought to us from the Form function,
  where the addNewProfile function is activated. Next we update the state of profiles to the data we need and use the 
  spread operator so that each one is given to us separately */
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
        
    	</div>
     
    );
  }	
}

export default App;









