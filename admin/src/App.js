
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import ProductForm from "./Pages/AdminPanel/ProductForm";
import Editform from "./Pages/AdminPanel/Editform";


// const mystyle = {
//   backgroundColor:"#f1b9b9",
// }

function App() {
  return (
    <div>



      <Router>
        <Routes>
          <Route path="/*" element={<AdminPanel />} />

          <Route path="/adminpanel/*" element={<AdminPanel />} />

          <Route path="/ProductForm" element={<ProductForm />} />
          <Route path="/editproduct/:id" element={<Editform />} />
          
        </Routes>


      </Router>
    </div>
  );
}

export default App;
