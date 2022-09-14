
import React from 'react';
import ReactDOM from 'react-dom/client';

import "./numberpadstyle.css";

//	The numberpad
class Numberpad extends React.Component {

	constructor(props){
		
		super(props);
		
		//	Number items = an array full of the number items
		//	decimal added = if the decimal has been added or not 
		//	places after decimal = will only want two numbers after decimal so check this
		var cState = {
			"numberItems" : [],
			"decimalAdded" : false,
			"placesAfterDecimal" : 0,
		}
		
		this.state = cState;
		
	}
	
	//	Test function for buttons.
	TestButton = (btnName) => {
		window.alert(btnName);
	}
	
	//	Checks to see if a decimal has been added.
	CheckForDecimal = () => {
		
		var cState = this.state;
		
		if(cState.decimalAdded == false){
			
			cState.decimalAdded = true;
			cState.numberItems.push(".");
			
			this.setState(cState);
			
		} else {
		
			window.alert("have already added the decimal point");
			
		}
		
		this.DisplayNumberValue();
		
	}
	
	//	Adds a number value to the numberItems array
	AddNumberValue = (numval) =>{
	
		//	Get the state
		var cState = this.state;
		
		//	If the decimal point has been added,
		//	then check to see if the number of positions after that 
		//	is greater than 2. If so, don't add else add.
		if(cState.decimalAdded == true){
		
		
			if(cState.placesAfterDecimal < 2){
				
				//	Increment counter
				cState.placesAfterDecimal += 1;
				
						
				//	Add item to the state
				cState.numberItems.push(numval);	
				
			} else {
				
				window.alert("Can't add more than two decimal places.");	
				
			}
		
		
		} else {
		
			//	Add item to the state
			cState.numberItems.push(numval);
		
		}
		
		//	Reassign the state
		this.state = cState;
		
		this.DisplayNumberValue();
		
	}
	
	//	Converts 
	DisplayNumberValue = () => {
		
		var cState = this.state;
		var numstr = "";
		
		for(let i = 0; i < cState.numberItems.length; i++){
			
			if(cState[i] == "."){
				numstr += cState.numberItems[i];
			} else {
				numstr += cState.numberItems[i].toString();
			}
			
			
		}
		
		this.props.numbersEntered(numstr);
		
	}


	render(){
	
		  return (
		    
		    <div className="numberpadContainer">
		    
		    	<h2>Numberpad:</h2>
		    
		    	<div className="numberpad">
		    		
		    		<button className="numpadButton"
		    			onClick = {
		    				 	() => {
		    						this.AddNumberValue(1);
		    				}
		    			}
		    		>1</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(2);
		    				}
		    		} >2</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(3);
		    				}
		    		} >3</button>
		    		
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(4);
		    				}
		    		} >4</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(5);
		    				}
		    		} >5</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(6);
		    				}
		    		} >6</button>
		    		
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(7);
		    				}
		    		} >7</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(8);
		    				}
		    		} >8</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(9);
		    				}
		    		} >9</button>
		    		
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.TestButton("CLEAR");
		    				}
		    		} >CLEAR</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    						this.AddNumberValue(0);
		    				}
		    		} >0</button>
		    		<button className="numpadButton"
		    				onClick = {
		    				 	() => {
		    					   	this.CheckForDecimal();	
		    				}
		    		} >.</button>
		    		
				<button
					onClick = {
					 	() => {
							this.props.GoNext();
						}
						
				} >ENTER</button>

		    		
		    	</div>
		    	
		    	
		    </div>
		    
		  );
	
	}

}

export default Numberpad;
