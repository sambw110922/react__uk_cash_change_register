
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./itenary.css";

//	The results display
class Itenary extends React.Component {

	constructor(props){
		
		super(props);
		
	}


	
	render(){
	
		  return (
		    
		    <div class="itenary">
		    	<label>Name: </label>
		    	<p>{ this.props.currencyName }</p>
		    	<label>Quantiy: </label>
		    	<p>{ this.props.quantity }</p>	    	
		    </div>
		    
		  );
	
	}

}

export default Itenary;
