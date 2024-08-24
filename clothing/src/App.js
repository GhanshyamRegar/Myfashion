import Layout from "./Components/Layout/Layout";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OrderPage from "./Pages/Orders/OrderPage";
import Login from "./Pages/Login";
import Help from "./Pages/Help";
import Signup from "./Pages/Signup";
import ForgetPass from "./Pages/ForgetPass";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Notification from "./Components/Layout/Notification";
import ProductDetails from "./Pages/ProductDetail";
import DynamicReating from "./Pages/components/DynamicReating";
import Orders from "./Pages/Orders/Orders";
import axios from "axios";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import UserEdit from "./Pages/Useredit";
import AddToCart from "./Pages/AdminPanel/Addtocart";
import ProductForm from "./Pages/AdminPanel/ProductForm";
import Buynow from "./Pages/Buynow";
import ProductCart from "./Pages/ProductCart";
import Editform from "./Pages/AdminPanel/Editform";
import Testform from "./Testform";
import UserAccount from "./Pages/User/UserAccount";
import Reviewform from "./Pages/Reviewform";
import Browserhistorylist from "./Pages/User/Browserhistorylist";
// import Placeorder from "./Pages/Orders/Placeorder"


// const mystyle = {
//   backgroundColor:"#f1b9b9",
// }

function App() {
  const [isLogin, setLogin] = useState(false);
  const [userId, setuserId] = useState("");
  const [userName, setUserName] = useState('Guest');
  const [productid,setproductid] = useState("")
  const [size, setsize] = useState("s");
  const [image, setimage] = useState(null);

  useEffect(() => {
    if (isLogin && userId) {
      axios.get(`http://localhost:4001/users/${userId}`) // Corrected URL
          .then(response => {
              setUserName(response.data.name); // Set the user name
              console.log(response.data.name)
          })
          .catch(error => {
              console.error('Error fetching user data:', error);
          });
    } else {
      setUserName('Guest');
    }
  }, [isLogin, userId]);


  const changeLogin = () => {
    setLogin(true)
  }

  const userfetch = async(userId) => {
    setuserId(userId)
    // const response = await axios.get(`http://localhost:4001/users/${userId}`)
    console.log(userName);
  }

  const productIdhandler = (id)=>{
      setproductid(id)
  }

  const sizehandler=(si)=>{
    setsize(si)
  }


  const selectimagehandler = (img)=>{
    setimage(img)
  }


  return (
    <div>



      <Router>
        <Layout isLogin={isLogin} userId={userId} />
        <Routes>
          <Route path="/" element={<Home  userId={userId} />} />
          <Route path="/history" element={<Browserhistorylist  userId={userId} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact userId={userId} />} />
          <Route path="/orderpage/*" element={<OrderPage  userId={userId} />} />
          <Route path="/orders" element={<Orders   userId={userId}/>} />
          <Route path="/UserAccount" element={<UserAccount  userId={userId}/>} />

          <Route path="/login" element={<Login changeLogin={changeLogin} userfetch={userfetch} />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/notification" element={<Notification  userId={userId} />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails  userId={userId} selectimagehandler={selectimagehandler} sizehandler={sizehandler} productIdhandler={productIdhandler}/>} />
          <Route path="/Dynamicreating" element={<DynamicReating />} />
          <Route path="/adminpanel/*" element={<AdminPanel userName={userName} />} />
          <Route path="/useredit" element={<UserEdit />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/ProductForm" element={<ProductForm />} />
          <Route path="/editproduct/:id" element={<Editform />} />

          <Route path="/buynow/*" element={<Buynow image={image} userName={userName}  userId={userId} productid={productid} size={size} />} />
          <Route path="/ProductCart/:id" element={<ProductCart/>} />
          <Route path="/reviewform/:id" element={<Reviewform userId={userId}/>} />


          {/* <Route path="/Placeorder" element={<Placeorder />} /> */}
          
        </Routes>


      </Router>
    </div>
  );
}

export default App;
