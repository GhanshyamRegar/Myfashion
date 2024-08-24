import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout actions here if needed
        alert("Logout successful");
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="logout-container">
            <Button variant="primary" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Logout;
