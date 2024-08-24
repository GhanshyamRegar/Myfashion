import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Usermanage = () => {
    const [users,setusers] = useState([])
    const [userdata,setusersdata] = useState([])
    const [state,setstate] = useState(false)

    useEffect(() => {
        const fetchusers = async () => {
          const response = await axios.get(`http://localhost:4001/users`);
         
          setusers(response.data);
        };
    
        fetchusers();
      }, [state]);


      const Deletehandler=async(id,name)=>{
      
        if(name!=="Admin")
        {
            const respone = await axios.delete(`http://localhost:4001/users/${id}`);
            setstate(!state)
            alert("user deleted successfully")
        }
        else
        {
            alert("What are you doing you are a admin bro")
        }
    
      }

      const userdetails=(id)=>{
        axios.get(`http://localhost:4001/users/${id}`) // Corrected URL
        .then(response => {
          setusersdata(response.data)
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
      }


      return (
        <div>
          <h2>User List</h2>
          <table className='border border-2' >
            <tr className='border border-2 my-3' >
    
              <th className='border border-2 mx-5 my-5 text-center' style={{ width: "300px" }}> User</th>
              <th className='border border-2 mx-5 my-5 text-center'style={{ width: "300px" }}>delete user</th>
            </tr>
    
    
            {users.map((user) => (
    
              <tr  key={user._id}>
                <td className='border border-2 mx-5 my-5 text-center'>{user.name}</td>
                <td onClick={()=>userdetails(user._id)}>Veiw user details</td>
                <td onClick={()=>Deletehandler(user._id,user.name)} >Delete</td>
              </tr>
            ))}
          </table>

            {userdata.name?(

              <div>
              <ul>
                <li>
              Name: {userdata.name}
                </li>
                <li>
              Email:{userdata.email}
                </li>
                <li>
              phone:{userdata.phone}
                </li>
              </ul>

              </div>
            ) :null 
            }
    
    
          
        </div>
      );
}

export default Usermanage;
