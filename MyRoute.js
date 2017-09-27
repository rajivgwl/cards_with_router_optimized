import React from 'react';
import MyApp from './MyApp.js';
import Spades from './Spades.js';
import Diamonds from './Diamonds.js';
import Hearts from './Hearts.js';
import Clubs from './Clubs.js';

import Allcards from './Allcards.js';

var { Router,Route,IndexRoute,IndexLink,browserHistory,Link } = ReactRouter;


class MyRoute extends React.Component { 


    render() 
   { 

   	return (
	    <Router history={browserHistory}>
	        <Route path="/" component={MyApp}>
	              <IndexRoute component={Allcards}/>
	                  <Route path="/Spades" component={Spades}> </Route>
	              <Route path="/Diamonds" component={Diamonds}> </Route>
	              <Route path="/Hearts" component={Hearts}> </Route>
	              <Route path="/Clubs" component={Clubs}> </Route>

	        </Route>

	    </Router>
	  )
  }

}

export default MyRoute;