import React from 'react';
import './index.css';
import axios from 'axios';

class Form extends React.Component {

    /* #! Setting the state of Username to an empty string */
	state = { userName: '' };

    /* This is the API call using Axios*/
	handleSubmit = async (event) => {

    /* The line below prevents the default action from happening */
  	event.preventDefault();

    /* This is where we call the API and fetch data. It is saved to resp,
    we then access this data by using dot notation, resp.data. This is because 
    all of the information we need is stored in an array inside the object, and
    the array is called data. We then pass this to our onSubmit which is a prop that we
    passed. This prop is the function for adding a new profile and it is called addNewProfile */
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);

    /* We then set the state back to an empty string so that the input field clears after we click submit */
    this.setState({ userName: '' });
  };
	render() {
  	return (
        /* The onSubmit is a new addition to React and it just makes the function run on click */
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          /* We set the value of the input to the userName state because we want the userName state to update when we type into it 
          As we type the userName state is updated and the onChange below allows us to do this. We have set the state of 
          userName to event.target.value, so whatever the user types, the state is updated.
          */
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}

export default Form;