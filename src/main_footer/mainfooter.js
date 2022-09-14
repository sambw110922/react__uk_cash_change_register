
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./footerstyle.css";


//	The footer
class MainFooter extends React.Component {

	constructor(props){
		
		super(props);
		
		//	The name of the app.
		this.name = "UK Currency App";
		
	}


	render(){
	
		  return (
			<footer>
				<p>2022</p>
			</footer>
		  );
	
	}

}

export default MainFooter;
