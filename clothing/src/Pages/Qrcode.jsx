import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Qrcode = ({userName,size,image,progressincrease,paymentmethod, productname, producttotalprice, userId, productid, address }) => {

const navigate = useNavigate()
    useEffect(() => {
        progressincrease(100)
        if (!paymentmethod) {
            alert(" select any payment method")
            console.log("select payment method");
            navigate("../")

        }
    }, [])

    const Orderplaced = async () => {

        const response =await axios.post("http://localhost:4001/orders/placeorder", {product_id:productid,image:image,username:userName,user_id:userId,productname:productname, address:address, paymentmethod:paymentmethod,size:size,price:producttotalprice});

        console.log(response.data);
        if(response)
        {
            alert("order placed")
            navigate("../../")
        }
    }

    return (
        <div className="text-center">
            Price to pay {producttotalprice}
            <div className="border border-5 text-center mx-auto" style={{ width: "200px", height: "200px" }}>
            </div>


            <button className="btn btn-primary" onClick={() => { Orderplaced() }}>Pay Now</button>
        </div>
    );
}

export default Qrcode;
