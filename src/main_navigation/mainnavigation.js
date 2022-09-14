
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./navigationstyle.css";


//	The main navigation component.
class Navigation extends React.Component {

	constructor(props){
		
		super(props);
		
	}


	render(){
	
		  return (
		    
		    <nav>
		    
		    	<a id="mainnavlink" href="./index.html">
		    		<h1>{ this.props.appTitle }</h1>
		    	</a>
		    	
		    	<div id="submenu">
		    		
		    		<a class="submenuLink" href="./">
		    			Link One
		    		</a>
		    		
		    		<a class="submenuLink" href="./">
		    			Link Two
		    		</a>
		    		
		    		<a class="submenuLink" href="./">
		    			Link Three
		    		</a>
		    		
		    		<a class="submenuLink" href="./">
		    			Link Four
		    		</a>
		    		
		    	</div>
		    	
		    </nav>
		    
		  );
	
	}

}

export default Navigation;
