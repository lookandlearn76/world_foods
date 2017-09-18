var React = require('react');
var {connect} = require('react-redux');
import Product from 'Product';
var uuid = require('node-uuid');


const ProductList = props => {
  const productItems = props.products.map((product) => {
    return (
      <Product
        onProductSelect={props.onProductSelect}
        key={uuid()}
        product={product}
      />
    );
  });

  return (
    <ul className="medium-6 large-4 columns">
      <h1>Inside ProductList</h1>
      {productItems}
    </ul>
  );
};

export default ProductList;
