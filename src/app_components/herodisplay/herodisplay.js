
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./herodisplaystyle.css";


//	The main hero component.
class HeroDisplay extends React.Component {

	constructor(props){
		
		super(props);
		
	}


	render(){
	
		  return (
		    
		    <div id="herodisplay">
		    
			<h2>Learn about UK currency today.</h2>
			<p>Blah blah blah yadda yadda yadda</p>
		    	
		    </div>
		    
		  );
	
	}

}

export default HeroDisplay;
