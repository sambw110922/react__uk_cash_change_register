
import "./currencydefs.js";

//	The class that handles the math. 
class CurrencyMath {
	
	//	Calculate notes 
	CalculateChange = (changeRequired, ukc, notesOrCoins) => {
		
		var updatedCR = changeRequired;
		
		if(notesOrCoins == 1){
			
			for(let n = 0; n < ukc.notes.length; n++){
				
				var cr = updatedCR / ukc.notes[n].cashValue;
				
				var crf = Math.floor(cr);
				
				ukc.notes[n].qty = crf;
				
				updatedCR -= ukc.notes[n].cashValue * crf;
				
			}

			
		} else {
			
			for(let n = 0; n < ukc.coins.length; n++){
				
				var cr = updatedCR / ukc.coins[n].cashValue;
				
				var crf = Math.floor(cr);
				
				ukc.coins[n].qty = crf;
				
				updatedCR -= ukc.coins[n].cashValue * crf;
				
			}
			
		}
		
		return [ updatedCR, ukc ];
		
	}

	
}


export default CurrencyMath;
