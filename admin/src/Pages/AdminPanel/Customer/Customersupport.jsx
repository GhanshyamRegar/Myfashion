import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Customersupport = () => {

    const [querys, setquerys] = useState([]);
    const [messege,setmessege] = useState("")
    const navigate = useNavigate()
  
  
    useEffect(() => {
      const fetchquery = async () => {
        const res = await axios.get('http://localhost:4001/getcontactquery');
        console.log(res.data);
        setquerys(res.data);
      };
  
      fetchquery();
    }, []);

    
    
    
    const sendnotification =async(id,msg)=>{
      console.log(id);
      
      const f={userid:id,msg:msg}
        
        const response = await axios.post('http://localhost:4001/users/notify',f)
            console.log(response);

            alert("messege send succesfully")
        
    }

    return (
        <div>
            <h1>Customer Support</h1>
            <h2>Query List</h2>
      <table className='border border-2'>
        <tr className='border border-2 my-3' >

          <th className='border border-2 mx-5 my-5 text-center'>User</th>
          <th className='border border-2 mx-5 my-5 text-center '  style={{ width: "300px" }}>Query</th>
          <th className='border border-2 mx-5 my-5 text-center'>send notification to him</th>
        </tr>


        {querys.map((query) => (

          <tr  key={query._id}>
            <td className='border border-2 mx-5 my-5 text-center'>name: {query.name} email:{query.email} mobile:{query.mobile}</td>
            <td className='border border-2 mx-5 my-5 text-center'>{query.message}</td>

            <td className='border border-2 mx-5 my-5 text-center'>
              Message him : 
              <input type="text" value={messege}  onChange={(e)=>setmessege(e.target.value)} /> <button className='btn btn-primary'  onClick={()=>{sendnotification(query.userid,messege)}}>Send</button>  </td>
          </tr>
        ))}


      </table>


        </div>
    );
}

export default Customersupport;
