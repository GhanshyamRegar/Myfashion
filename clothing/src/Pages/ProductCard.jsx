import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cards = ({ userId }) => {

  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4001/products')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cards!', error);
      });





  }, []);


  const imgStyle = {
    height: '300px',
    objectFit: 'cover'
  };

  const productdetailclickhandle = (id) => {
    navigate(`/ProductDetails/${id}`)
  }



  const productcartclickhandle = async (product) => {

    if (userId) {
      

      try {
        const response = await axios.post('http://localhost:4001/cart', {
          user_id: userId,
          product_id: product._id,
          image: product.images[0],
          description: product.description,
          productname: product.name,
          price: product.price
        })
        console.log(response)
        console.log("Added to cart")
      }
      catch (err) {
        console.log('There was an error in adding the cart!', err);
      }
    }
    else {
      alert("Please login first.");
    }



  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
      {cards.map(card => (
        <Card key={card._id} style={{ width: '17.8rem', height: "auto" }}> {card.name}
          <Card.Img variant="top" src={"http://localhost:4001/Images/" + card.images[0]} style={imgStyle} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="link"><FontAwesomeIcon icon={faHeart} /></Button>
              {/* <Button variant="link"><FontAwesomeIcon icon={faShareAlt} /></Button> */}
              <Button variant="link" onClick={() => productdetailclickhandle(card._id)} ><FontAwesomeIcon icon={faEye} /></Button>
              <Button variant="link" onClick={() => productcartclickhandle(card)}  ><FontAwesomeIcon icon={faShoppingCart} /></Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
