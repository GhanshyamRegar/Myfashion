import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ordermanage = () => {

    const [orders,setorders] = useState([])
    const [state,setstate] = useState(true)


    useEffect(() => {
      try
      {
        const fetchorders = async () => {
          const response = await axios.get(`http://localhost:4001/orders`);
          setorders(response.data)
        }; 
        fetchorders();
      }
      catch(err)
      {
        console.log(err)
      }
      }, [state]);


      const setdeliver = async(stat,order)=>{
        const orderdetails = {...order, status:stat};
        console.log(orderdetails)
        try {
          const response = await axios.put(`http://localhost:4001/orders/order/${order._id}`, orderdetails);  
          setstate(!state)
        } catch (error) {
          console.error('Error updating order :', error);
        }
      }

    return (
        <div>
            <h1>Ordermanage</h1>
            <div>
          <h2>order List</h2>
          <table className='border border-2' >
            <tr className='border border-2 my-3'>
    
              <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>Order PLaced BY</th>
              <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>Product</th>
              <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>Address</th>
              <th className='border border-2 mx-5 my-5 text-center'>Size</th>
              <th className='border border-2 mx-5 my-5 text-center'>Price</th>
              <th className='border border-2 mx-5 my-5 text-center'>Status</th>
              <th className='border border-2 mx-5 my-5 text-center'>Delivered</th>
            </tr>
    
    
            {orders.map((order) => (
    
              <tr  key={order._id}>
                <td className='border border-2 mx-5 my-5 text-center'>{order.username}</td>
                <td >{order.productname}</td>
                <td >{order.address}</td>
                <td >{order.size}</td>
                <td >{order.price}</td>
                <td >{order.status}</td>
                <td ><button onClick={()=>{setdeliver("success",order)}} >Deliveered</button>
                <button onClick={()=>{setdeliver("pending",order)}} >Pending</button>
                <button onClick={()=>{setdeliver("cancel",order)}} >Cancel</button>
                </td>
              </tr>
            ))}
          </table>

         
          
        </div>
        </div>
    );
}

export default Ordermanage;
