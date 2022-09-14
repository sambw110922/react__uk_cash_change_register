
import React from 'react';
import ReactDOM from 'react-dom/client';

//	Currency definitions
import CurrencyDefs from "../mathdefs/currencydefs.js";

//	Itenary
import Itenary from "./itenary/itenary.js";

//	The results display
class Resultsdisplay extends React.Component {

	constructor(props){
		
		super(props);
		
		this.name = "Results Display";
		
		var ukc = new CurrencyDefs();

		
		this.state = ukc;

		
	}
	
	
	//	Generate an itenary object
	GenerateItenary = (displayName, qty) => {		
		var itn = <Itenary currencyName={displayName} quantity={qty} />
		return itn;		
	}

	
	render(){
		
		var itns = [];
		
		/*
		var ukc = this.props.ukc;
		
		var notes = ukc.notes;
		var coins = ukc.coins;
		*/
		
		for(let n = 0; n < this.props.ukc.notes.length; n++){
		
			if(this.props.ukc.notes.qty > 0){
			
				itns.push(
					this.GenerateItenary(
						this.props.ukc.notes[n].displayName,
						this.props.ukc.notes[n].qty
					)
				);
			
			}
			
		}
		
		for(let co = 0; co < this.props.ukc.coins.length; co++){
		
			if(this.props.ukc.coins[co].qty > 0){
		
				itns.push(
					this.GenerateItenary(
						this.props.ukc.coins[co].displayName,
						this.props.ukc.coins[co].qty
					)
				);
			
			}
		
		}
		
		  return (
		    
		    <div id="resultsDisplayContainer">
		    
		    	<h2>{ this.name }</h2>
		    	
		    	<div id="resultsDisplay">
				{
					itns
				}
		    	</div>
		    	
		    	
		    </div>
		    
		  );
	
	}

}

export default Resultsdisplay;
