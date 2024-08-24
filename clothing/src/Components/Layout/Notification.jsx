import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../Style/Notification.css'; // Import your custom CSS file
import Reviews from '../../Pages/Reviews';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const Notification = ({ userId,className, children, delay = 1000 }) => {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);


  const [notifications,setnotifications] = useState([])


  useEffect(() => {

    const fetch = async()=>{
      if(userId)
      {

        const response = await axios.get(`http://localhost:4001/users/notify/${userId}`)
        console.log(response.data)
        setnotifications(response.data)
      }
      else
      {
        alert("You are not logged in")
      }
    }
    fetch()

  },[])



  return (
    <>
    <div className={`animated-list-container ${className}`}>
    <h1>Notification</h1>
      <div className="animated-list-content">

        {
          notifications.map((notify)=>(
            <Container key={notify.userid} className='border border-1'>
              <h3>
              {notify.msg}
              </h3>

            </Container>

          ))
        }

      </div>
    </div>
      <Reviews/>
      </>
  );
};

export default Notification;
