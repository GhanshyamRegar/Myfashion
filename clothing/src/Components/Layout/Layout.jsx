import React from 'react';
import Header from './Header';



const mystyle = {
    backgroundColor:"#f1b9b9",
}

const Layout = ({isLogin,userId}) => {


    return (
        <div style={mystyle}>
            <Header isLogin={isLogin} userId={userId}/>             
        </div>
    );
}

export default Layout;
