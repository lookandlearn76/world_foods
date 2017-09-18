import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Nav from 'Nav';
import About from 'About';
import Basket from 'Basket';
import Market from 'Market';

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="basket" component={Basket}/>
      <IndexRoute component={Market}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
