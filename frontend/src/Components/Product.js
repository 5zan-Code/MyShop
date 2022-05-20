import React from "react";
import { Card } from "react-bootstrap";
import Rating from '../Components/Rating'

const Product = ({ product }) => {
  return (
<<<<<<< HEAD
    <>
      <Card className="my-3 p-3 rounded ">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </a>
=======
    <Card className= 'my-3 p-3 rounded '>
       <a href={`/product/${product._id}`}>
           <Card.Img src={product.image} variant='top'/>
         

           
       </a>
>>>>>>> c2ccb48984428f2dea8e96a60d1635d6856c8e01

        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text>
            <div className="my-3">
            <Rating rating={product.Rating} numReviews ={`${product.numReviews} Reviews`} />
          </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
