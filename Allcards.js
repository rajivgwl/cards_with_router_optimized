import React from 'react';
var data = require('./cards.json');



class Allcards extends React.Component {
  render() {
  	var deck=[]
  	for (var key in data[0].rank) 
          	     {
	               for (var y in data[0].suit) 
		           	  {   
	                    switch(data[0].suit[y])
							{
								case "♠":
								  var color ="black";
								  break;

								case "♦":
								var color ="red";
								break;

								case "♣":
								  var color ="black";
								  break;

								case "♥":
								var color ="red";
								break;

								default:
	                              console.log("none")
	                        }
		           	  	deck.push([data[0].rank[key] ,data[0].suit[y],color]);
		           	  }  
                 }         	           

      return (
        <div>
        	 <div className="row col-sm-10 col-sm-offset-2">
	          {
	        deck.map(card => (
		        <div className="col-sm-2" style={{color: card[2]}}>
		        <div className="card">

			                
			                 <h4> {card[0]}  </h4>
			                 <br /><br /> <h3 className="text-center"> {card[1]} </h3> <br /> <br /> <br />
			            <h4 className="card-text text-right"> {card[0]} </h4>
                      
		         </div>
		         </div>
		        
		       
		        ))
	    } 
		     </div>

          </div>
      )
    }

}


export default Allcards;
