import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;
  return (
    <Card key={product.slug} className='text-center'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className='card-img-top'/>
      </Link>
      <Card.Body>

        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <button className="btn text-white">Add To Cart</button>
      </Card.Body>

     
    </Card>
  );
};

export default Product;
