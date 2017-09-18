import React from 'react';
import SearchBar from 'SearchBar';
import ProductList from 'ProductList';
import ProductInfo from 'ProductInfo';
var uuid = require('node-uuid');

class Market extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        products: [],
        chosenProduct: null
      };
  }

  productSearch() {
    console.log("inside productSearch");
  }
  render() {
    return(
      <div>
        <h1 className="title">WORLD FOODS</h1>
        <SearchBar/>
        <ProductInfo/>
        <ProductList products={this.state.products}/>
      </div>
    )
  }

}

export default Market;
