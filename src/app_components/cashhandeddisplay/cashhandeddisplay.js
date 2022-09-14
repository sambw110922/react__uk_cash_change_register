
import React from 'react';
import ReactDOM from 'react-dom/client';

//	The numberpad
import Numberpad from "../numberpad/numberpad.js";

//	CSS
import "./cashhandeddisplaystyle.css";

//	The item cost display.
class Cashhandeddisplay extends React.Component {

	constructor(props){
		
		super(props);
		
		this.name = "Cash Handed Display";
		
		var cState = {
			"numbersEntered" : "DEFAULT"
		}
		
		this.state = cState;
		
		
	}
	
	//	What happens on click enter
	BtnEnter = () => {
		
		this.props.CashHanded(this.state.numbersEntered);
		
		
	}
	
	//	Gets the numbers entered from numberpad
	GetNumbersEntered = (numval) => {
	
		var cState = {
			"numbersEntered" : numval
		}
	
		this.setState(cState);
		
	}


	render(){
	
		  return (
			<div id="cashHandedDisplayContainer">
			
				<h2>{ this.name }</h2>
				
				<label id="lblCashHandedDisplay">
					{ this.state.numbersEntered }
				</label>
				
				<Numberpad GoNext={ this.BtnEnter }  numbersEntered={ this.GetNumbersEntered } />
				
			</div>
		  );
	
	}

}

export default Cashhandeddisplay;
