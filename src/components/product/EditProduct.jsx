// //edit product (admin side)

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EditProduct = () => {
//     const [product, setProduct] = useState({});
//     const [name, setName] = useState('');
//     const [price, setPrice] = useState('');
//     const [image, setImage] = useState('');
//     const [description, setDescription] = useState('');

//     useEffect(() => {
//         // Fetch the product from the API
//         axios.get('/api/product/1')
//             .then(response => {
//                 setProduct(response.data);
//                 setName(response.data.name);
//                 setPrice(response.data.price);
//                 setImage(response.data.image);
//                 setDescription(response.data.description);
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Send a PUT request to the API
//         axios.put(`/api/products/${product.id}`, {
//             name,
//             price,
//             image,
//             description
//         })
//             .then(response => {
//                 console.log('Product updated successfully!', response);
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     };

//     return (
//         <div>
//             <h1>Edit Product</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={event => setName(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input
//                         type="text"
//                         value={price}
//                         onChange={event => setPrice(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Image:</label>
//                     <input
//                         type="file"
//                         value={image}
//                         onChange={event => setImage(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={event => setDescription(event.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Update Product</button>
//             </form>
//         </div>
//     );
// }

// export default EditProduct;


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    qty: "",
  });

  const [image, setImage] = useState(null); // Separate state for the image file

  useEffect(() => {
    axios
      .get(`http://localhost:1000/api/product/${id}`)
      .then((response) => {
        const { title, price, qty, imgSrc } = response.data.product;
        setProduct({ title, price, qty });
        // Optional: Handle existing image (e.g., display preview)
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:1000/api/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => alert("Product updated successfully!"))
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="name"
          className="w-full p-2 border rounded"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="price"
          className="w-full p-2 border rounded"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="quantity"
          className="w-full p-2 border rounded"
          value={product.qty}
          onChange={(e) => setProduct({ ...product, qty: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded"
          onChange={(e) => setImage(e.target.files[0])} // Handle the new image file
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
