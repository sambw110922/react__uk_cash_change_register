
import React from 'react';
import ReactDOM from 'react-dom/client';

//	The numberpad
import Numberpad from "../numberpad/numberpad.js";

//	CSS
import "./itemcostdisplaystyle.css";

//	The item cost display.
class Itemcostdisplay extends React.Component {

	constructor(props){
		
		super(props);
		
		this.name = "Item Cost Display";
		
		var cState = {
			"numbersEntered" : "DEFAULT"
		}
		
		this.state = cState;
		
		
	}
	
	//	What happens on click enter
	BtnEnter = () => {
		
		this.props.ItemCost(this.state.numbersEntered);
		
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
			<div id="itemCostDisplayContainer">
				<h2>{ this.name }</h2>
				
				<label id="lblItemCostDisplay">
					{ this.state.numbersEntered }
				</label>
				
				<Numberpad GoNext={ this.BtnEnter }  numbersEntered={ this.GetNumbersEntered } />
				
			</div>
		  );
	
	}

}

export default Itemcostdisplay;
