import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CartIcon = styled(FaShoppingCart)`
  font-size: 2rem;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
`;

const AddToCartButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AddToCart = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <Container>
      <CartContainer>
        <CartIcon />
        {itemCount > 0 && <ItemCount>{itemCount}</ItemCount>}
      </CartContainer>
      <AddToCartButton onClick={handleAddToCart}>
        Add to Cart
      </AddToCartButton>
    </Container>
  );
};

export default AddToCart;
