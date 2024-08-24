import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductListadmin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  const [state,setstate]= useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:4001/products');
      setProducts(res.data);
    };

    fetchProducts();
  }, [state]);


  const Deletehandler=async(id)=>{
    console.log(id)

    const respone = await axios.delete(`http://localhost:4001/products/${id}`);
    setstate(!state)
    alert("product deleted successfully")

  }
  

  return (
    <div>

      <h2>Product List</h2>
      <table className='border border-2' >
        <tr className='border border-2 my-3' >

          <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>Product</th>
          <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>Edit</th>
          <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}>delete</th>
        </tr>


        {products.map((product) => (

          <tr  key={product._id}>
            <td className='border border-2 mx-5 my-5 text-center'>{product.name}</td>
            <td onClick={()=>navigate(`../../editproduct/${product._id}`)}><Link to="#">Edit</Link></td>
            <td onClick={()=>Deletehandler(product._id)} >Delete</td>
          </tr>
        ))}

        <button onClick={()=>navigate("../../ProductForm")}>Add Product</button>

      </table>

      
    </div>
  );
};

export default ProductListadmin;
