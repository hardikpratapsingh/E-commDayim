// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import { response } from 'express';

// const AddProduct = () => {
//     const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         stock: '',
//         image: ''
//     });
//     useEffect(() => {
//         axios.post('/api/product/add')
//         .then(response =>{
//             setProduct(response.data)

//         })
//         .catch(error => {
//             console.error('Something went wrong',error);

//         });
//     },[]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProduct({
//             ...product,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', product.name);
//         formData.append('description', product.description);
//         formData.append('price', product.price);
//         formData.append('category', product.category);
//         formData.append('stock', product.stock);
//         formData.append('image', product.image);

//         // Add your API call here to submit the product
//         console.log(product);

//         // Reset the form
//         setProduct({
//             name: '',
//             description: '',
//             price: '',
//             category: '',
//             stock: '',
//             image: ''
//         });
//     };

//     return (
//         <div>
//             <h2>Add New Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={product.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         name="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input
//                         type="number"
//                         name="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Category:</label>
//                     <input
//                         type="text"
//                         name="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Stock:</label>
//                     <input
//                         type="number"
//                         name="stock"
//                         value={product.stock}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Image:</label>
//                     <input
//                         type="file"
//                         name="imgsrc"
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// };

// export default AddProduct;

// import { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//         name: '',
//         description: '',
//         price: '',
//         category: '',
//         stock: '',
//         image: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("/api/product", product)
//       .then((response) => alert("Product added successfully!"))
//       .catch((error) => console.error("Error adding product:", error));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Product Name"
//           className="w-full p-2 border rounded"
//           value={product.name}
//           onChange={(e) => setProduct({ ...product, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           className="w-full p-2 border rounded"
//           value={product.price}
//           onChange={(e) => setProduct({ ...product, price: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Stock"
//           className="w-full p-2 border rounded"
//           value={product.stock}
//           onChange={(e) => setProduct({ ...product, stock: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           className="w-full p-2 border rounded"
//           value={product.category}
//           onChange={(e) => setProduct({ ...product, category: e.target.value })}
//         />
//         <textarea
//           placeholder="Description"
//           className="w-full p-2 border rounded"
//           value={product.description}
//           onChange={(e) => setProduct({ ...product, description: e.target.value })}
//         />
//         <input
//           type="file"
//           placeholder="Image URL"
//           className="w-full p-2 border rounded"
//           value={product.image}
//           onChange={(e) => setProduct({ ...product, image: e.target.value })}
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        qty: "",
        
    });

    const [image, setImage] = useState(null);  // Separate state for file upload
    
    const handleSubmit =  (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("price", product.price);
        formData.append("category", product.category);
        formData.append("stock", product.qty);
        formData.append("image", image); // Append the file to form data

        axios
        .post("http://localhost:1000/api/product/add", formData, {
            headers: {
            "Content-Type": "multipart/form-data",  // Specify the correct content type
            },
        })
        .then((response) => alert("Product added successfully!"))
        .catch((error) => console.error("Error adding product:", error));

    };

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            placeholder="Product Name"
            className="w-full p-2 border rounded"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
            <input
            type="number"
            placeholder="Price"
            className="w-full p-2 border rounded"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
            <input
            type="number"
            placeholder="Stock"
            className="w-full p-2 border rounded"
            value={product.qty}
            onChange={(e) => setProduct({ ...product, qty: e.target.value })}
            />
            <input
            type="text"
            placeholder="Category"
            className="w-full p-2 border rounded"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            />
            <textarea
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <input
          type="file"
          accept="image/*" // Restrict to image files only
          className="w-full p-2 border rounded"
          onChange={(e) => setImage(e.target.files[0])} // Update file state
        />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Product
            </button>
        </form>
        </div>
    );
    }

export default AddProduct;
