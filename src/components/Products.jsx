import React from 'react';
import products from "../resources/products.json";
import "../styles/products.css"

export default function Products() {
  console.log(products)
  return (
    <div className="container">
      <div className="shopContainer">
      {
        products.map((prod, key) =>(
          <div className="productContainer" key={key}>
            <div className="image"><img src={require('../img/products/'+prod.image+'.jpg')} alt={prod.image} /></div>
            <div className="infoLine"><p className="tag">Presentation:</p><p className="info">{prod.weight}</p></div>
            <div className="infoLine"><p className="tag">Price:</p><p className="info">{prod.price}</p></div>
          </div>
        ))
      }
    </div>
    </div>
  )
}
