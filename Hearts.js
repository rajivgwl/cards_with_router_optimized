import React from 'react';

var data = require('./cards.json');

class Hearts extends React.Component {
  render() {
  	var all_spades=[]
  	for (var all_rank in data[0].rank) 
         {
             
              all_spades.push([data[0].rank[all_rank] ,"♥","red"])
             
         }  
       return (
        <div>
           <div className="row col-sm-10 col-sm-offset-2">
            {
          all_spades.map(card => (
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



export default Hearts;