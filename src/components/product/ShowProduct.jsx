import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const { products, filteredData, addToCart } = useContext(AppContext);

  // Function to ensure correct image path
  const fixImagePath = (imgSrc) => {
    // Check if the imgSrc is valid and prepend the full URL if necessary
    if (imgSrc && !imgSrc.startsWith("http")) {
      return `http://localhost:1000${imgSrc}`;
    }
    return imgSrc;
  }
  return (
    <>
      <div className="container  d-flex justify-content-center align-items-center">
        <div className="row container d-flex justify-content-center align-items-center my-5">
          {filteredData?.map((product) => (
            <div
              key={product._id}
              className="my-3 col-md-4 
            d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light text-center"
                style={{ width: "18rem" }}
              >
                <Link
                  to={`/product/${product._id}`}
                  className="d-flex justify-content-center align-items-center p-3"
                >
                  <img
                    src={fixImagePath(product.imgSrc)}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="my-3">
                    <button className="btn btn-primary mx-3">
                      {product.price} {"₹"}
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        addToCart(
                          product._id,
                          product.title,
                          product.price,
                          1,
                          product.imgSrc
                        )
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ShowProduct = () => {
//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:1000/api/product/all");
//         setProducts(response.data.products);  // Assuming the data structure is { products: [...] }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (!products.length) {
//     return <div>Loading...</div>;  // Display loading message while products are being fetched
//   }

//   return (
//     <div className="container d-flex justify-content-center align-items-center">
//       <div className="row container d-flex justify-content-center align-items-center my-5">
//         {products.map((product) => (
//           <div key={product._id} className="my-3 col-md-4 d-flex justify-content-center align-items-center">
//             <div className="card bg-dark text-light text-center" style={{ width: "18rem" }}>
//               <Link to={`/product/${product._id}`} className="d-flex justify-content-center align-items-center p-3">
//                 <img
//                   src={`http://localhost:1000${product.imgSrc}`}  // Make sure this is the correct URL
//                   className="card-img-top"
//                   alt={product.title}
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "10px",
//                     border: "2px solid yellow",
//                   }}
//                 />
//               </Link>
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <div className="my-3">
//                   <button className="btn btn-primary mx-3">{product.price} ₹</button>
//                   <button className="btn btn-warning">Add To Cart</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowProduct;
