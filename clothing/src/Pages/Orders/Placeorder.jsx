import React, { useState } from 'react';
import axios from 'axios';

const Placeorder = () => {
    const [formData, setFormData] = useState({
        product_id: '',
        name: '',
        description: '',
        top_fabric: '',
        bottom_fabric: '',
        sleeve_length: '',
        top_pattern: '',
        bottom_pattern: '',
        net_quantity: '',
        add_ons: '',
        sizes: '',
        price: 0,
        category: '',
        colors: '',
        images: '',
        stock: 0,
        country_of_origin: '',
        brand: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleArrayChange = (e, arrayName) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [arrayName]: value.split(','),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/placeorders', formData);
            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Failed to place order.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="product_id" placeholder="Product ID" value={formData.product_id} onChange={handleChange} required />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <input type="text" name="top_fabric" placeholder="Top Fabric" value={formData.top_fabric} onChange={handleChange} required />
            <input type="text" name="bottom_fabric" placeholder="Bottom Fabric" value={formData.bottom_fabric} onChange={handleChange} required />
            <input type="text" name="sleeve_length" placeholder="Sleeve Length" value={formData.sleeve_length} onChange={handleChange} required />
            <input type="text" name="top_pattern" placeholder="Top Pattern" value={formData.top_pattern} onChange={handleChange} required />
            <input type="text" name="bottom_pattern" placeholder="Bottom Pattern" value={formData.bottom_pattern} onChange={handleChange} required />
            <input type="text" name="net_quantity" placeholder="Net Quantity" value={formData.net_quantity} onChange={handleChange} required />
            <input type="text" name="add_ons" placeholder="Add Ons" value={formData.add_ons} onChange={handleChange} required />
            <input type="text" name="sizes" placeholder="Sizes (comma separated)" value={formData.sizes} onChange={(e) => handleArrayChange(e, 'sizes')} required />
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
            <input type="text" name="colors" placeholder="Colors (comma separated)" value={formData.colors} onChange={(e) => handleArrayChange(e, 'colors')} required />
            <input type="text" name="images" placeholder="Images (comma separated)" value={formData.images} onChange={(e) => handleArrayChange(e, 'images')} required />
            <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} required />
            <input type="text" name="country_of_origin" placeholder="Country of Origin" value={formData.country_of_origin} onChange={handleChange} required />
            <input type="text" name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} required />
            <button type="submit">Place Order</button>
        </form>
    );
};

export default Placeorder;
