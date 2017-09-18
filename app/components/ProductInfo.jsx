import React from 'react';

const ProductInfo = ({product}) => {
  if (!product) {
    return <div>Product is loading......</div>;
  }

  const productId = product.id.productId;
  const url = '../products.json' + productId;

  return (
    <div className="product-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{product.snippet.title}</div>
        <div>{product.snippet.description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
