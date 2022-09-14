import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

//	The main navigation.
import Navigation from "./main_navigation/mainnavigation.js";

//	The main footer.
import MainFooter from "./main_footer/mainfooter.js";

//	The hero on the index page.
import HeroDisplay from "./app_components/herodisplay/herodisplay.js";

//	The item cost display.
import Itemcostdisplay from "./app_components/itemcostdisplay/itemcostdisplay.js";

//	The cash handed display.
import Cashhandeddisplay from "./app_components/cashhandeddisplay/cashhandeddisplay.js";

//	Results display
import Resultsdisplay from "./app_components/resultdisplay/resultsdisplay.js";

//	Currency definitions
import CurrencyDefs from "./app_components/mathdefs/currencydefs.js";

//	Currency math.
import CurrencyMath from "./app_components/mathdefs/currencymath.js";

//	The main number pad
//import Numberpad from "./app_components/numberpad/numberpad.js";

//	The parent app.
class App extends React.Component {

	constructor(props){
		
		super(props);
		
		//	The name of the app.
		this.name = "UK Currency App";
		
		var ukc = new CurrencyDefs();
		
		var cstate = {
			"itemCost" : "0.00",
			"cashHanded" : "0.00",
			"results" : "0.00",
			"ukc" : ukc
		}
		
		this.state = cstate;
		
	}
	
	//	Gets the Item Cost
	GetItemCost = (itemCost) => {
	
		this.setState({
			"itemCost" : itemCost
		});
		
		
	}
	
	//	Gets the Cash Handed
	GetCashHanded = (cashHanded) => {
		
		this.setState({
			"cashHanded" : cashHanded
		});
		
		this.CalculateChange(this.state.cashHanded, this.state.itemCost);
		
	}
	
	//	Calculate the change.
	CalculateChange = (cashHanded, productCost) => { 

		var cmath = new CurrencyMath();
		
		//	Change required 
		var changeRequired = parseFloat(cashHanded) - parseFloat(productCost);
		
		var updatedUKC = cmath.CalculateChange(changeRequired, this.state.ukc, 1);
		var updatedUKC = cmath.CalculateChange(updatedUKC[0], this.state.ukc, 2);
		
		this.setSate({
			"ukc" : updatedUKC,
			"results" : changeRequired
		});
		
	}
	

	render(){
	
		  return (
		    <>
		    	<Navigation appTitle={this.name} />
		    	<HeroDisplay />
		    	<Itemcostdisplay ItemCost={ this.GetItemCost } />
		    	<hr/>
		    	<Cashhandeddisplay CashHanded={ this.GetCashHanded } />
		    	<hr/>
		    	<Resultsdisplay ItemCost={ this.state.itemCost } CashHanded={ this.state.cashHanded } ukc={ this.state.ukc } />
		    	<hr/>
		    	<MainFooter />
		    </>
		  );
	
	}

}

export default App;
