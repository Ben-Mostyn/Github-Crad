import React from 'react';
import './index.css';




const CardList = (props) => (
	<div>
     {/* Here we map through the profiles that we have fetched from the API. We have passed the data through as a this.props.
    We have also made it so that  */}
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

export default CardList;