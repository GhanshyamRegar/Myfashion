import axios from 'axios';
import React, { useEffect, useState } from 'react';
import shirt from '../Components/Images/shirt.webp';
import { Link, useNavigate } from 'react-router-dom';

const ReviewYourOrder = ({ getaddress,productid,getproductprice,image  }) => {

    const [productdata, setproductdata] = useState({})
    const [address, setaddress] = useState("")

    

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:4001/products/${productid}`);
                setproductdata(response.data)


                if(response.data.price>=200)
                {
                    getproductprice(response.data.price , response.data.name)
                }
                else
                {
                    // const total = response.data.price
                    getproductprice(response.data.price+70, response.data.name)
                }

            } catch (error) {
                console.error('Error fetching the product details:', error);
            }
        };

        fetchProductDetails();
    }, []);


    const Addaddress=(address)=>{
        console.log(address);
        getaddress(address)

    }

    return (
        <div>
            Review your order



            {/* details of your product */}

            <div style={{ borderTop: "1px solid grey", borderBottom: "1px solid grey", display: "flex" }}>
                
                <img  src={"http://localhost:4001/Images/"+image} alt="not ava" style={{ width: "100px" }} />
                <div>
                    <div>
                        {productdata.name}
                    </div>
                    <div>
                        {productdata.price}
                    </div>
                    <div>
                        select Size
                    </div>
                    <div>
                        select quantity
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>
                    sold by :Rehgfj
                </h6>
                <h6>
                    {productdata.price >= 200 ? "free Delivery" : "70Rs shipping cost"}
                </h6>
            </div>

            <div>

                {/* address */}
                <div>
                    gps logo
                    Delivery Address
                    <ul>
                        <li>Address : <input type="text" value={address} onChange={(e)=>{setaddress(e.target.value)}} id="address"/></li>
                    </ul>
                    <button  className='btn btn-primary'  onClick={()=>{Addaddress(address)}}> Add Address</button>
                </div>
                address of user has to fill

            </div>

            {/* price */}
            <div>
                <h3>price Details(1 item)</h3>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            Total product price
                        </span>
                        <span>
                            {productdata.price}
                        </span>
                    </div>

                    {/* total */}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        Order total
                        {productdata.price >= 200 ? (
                            <span>
                                {productdata.price}
                            </span>
                        ) : (
                            <span style={{ color: "green" }}>
                                {productdata.price + 70}
                            </span>
                        )}


                    </div>
                    {/* continue */}
                    <div style={{textAlign:"center",    backgroundColor: "#6bff6b",padding:"10px 20px "}}>
                        percentage icon  Yay ! your total discount is rs 197
                    </div>
                        <div style={{ display: "flex", justifyContent: "space-between",margin:"20px" }}>

                            {productdata.price >= 200 ? (
                                <span>
                                    {productdata.price}
                                </span>
                            ) : (
                                <span>
                                    {productdata.price + 70}
                                </span>
                            )}

                                <Link to="./selectpayment">

                            <button>
                                Continue
                            </button>
                                </Link>

                        </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewYourOrder;
