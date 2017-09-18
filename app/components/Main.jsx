import React from 'react';
import Nav from 'Nav';
import Market from 'Market';
import Basket from 'Basket';
import SearchBar from 'SearchBar';
import ProductList from 'ProductList';
import ProductInfo from 'ProductInfo';
var uuid = require('node-uuid');

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="row">
          {this.props.children}
          <Market/>
        </div>
      </div>
    );
  }

}

export default Main;
