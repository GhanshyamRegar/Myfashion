import React, { useState } from 'react';
import styled from 'styled-components';
import googlePayLogo from '../Components/Images/gpay.png';
import phonePeLogo from '../Components/Images/phonepe.png';
import paytmLogo from '../Components/Images/paytm.png';
import razorpayLogo from '../Components/Images/Rozarpay.png';
import amazonPayLogo from '../Components/Images/amazonpay.png';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const PaymentOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 5px;
  }

  &.selected {
    border: 2px solid #007bff;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    margin: 5px;
  }
`;

const UserEdit= () => {
  const [formData, setFormData] = useState({
    address: '',
    number: '',
    paymentMethod: '',
    name: '',
    profilePhoto: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePhoto: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({
      ...formData,
      paymentMethod: method,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Container>
      <h2>Edit User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <ProfilePhoto>
          <img src={formData.profilePhoto} alt="Profile" />
          <Input type="file" accept="image/*" onChange={handlePhotoChange} />
        </ProfilePhoto>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <Label htmlFor="number">Number</Label>
        <Input
          type="text"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
        />
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <PaymentMethods>
          <PaymentOption
            onClick={() => handlePaymentMethodChange('Google Pay')}
            className={formData.paymentMethod === 'Google Pay' ? 'selected' : ''}
          >
            <img src={googlePayLogo} alt="Google Pay" />
            Google Pay
          </PaymentOption>
          <PaymentOption
            onClick={() => handlePaymentMethodChange('PhonePe')}
            className={formData.paymentMethod === 'PhonePe' ? 'selected' : ''}
          >
            <img src={phonePeLogo} alt="PhonePe" />
            PhonePe
          </PaymentOption>
          <PaymentOption
            onClick={() => handlePaymentMethodChange('Paytm')}
            className={formData.paymentMethod === 'Paytm' ? 'selected' : ''}
          >
            <img src={paytmLogo} alt="Paytm" />
            Paytm
          </PaymentOption>
          <PaymentOption
            onClick={() => handlePaymentMethodChange('Amazon Pay')}
            className={formData.paymentMethod === 'Amazon Pay' ? 'selected' : ''}
          >
            <img src={amazonPayLogo} alt="Amazon Pay" />
            Amazon Pay
          </PaymentOption>
          <PaymentOption
            onClick={() => handlePaymentMethodChange('Razorpay')}
            className={formData.paymentMethod === 'Razorpay' ? 'selected' : ''}
          >
            <img src={razorpayLogo} alt="Razorpay" />
            Razorpay
          </PaymentOption>
        </PaymentMethods>
        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
};

export default UserEdit;
