import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch all orders from the API
        axios.get('/api/order')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the orders!', error);
            });
    }, []);

    return (
        <div>
            <h1>All Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Order Date</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>PinCode</th>
                        <th>Phone Number</th>
                        {/* <th>Status</th>
                        <th>Total</th> */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.fullName}</td>
                            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                            <td>{order.city}</td>
                            <td>{order.state}</td>
                            <td>{order.country}</td>
                            <td>{order.pincode}</td>
                            <td>{order.phoneNumber}</td>
                            {/* <td>{order.status}</td>
                            <td>${order.total.toFixed(2)}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;


// import { useEffect, useState } from "react";
// import axios from "axios";

// const AllOrder = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/order") // Backend API endpoint
//       .then((response) => setOrders(response.data))
//       .catch((error) => console.error("Error fetching orders:", error));
//   }, []);

//   const updateOrderStatus = (id, status) => {
//     axios
//       .put(`/api/order/${id}`, { status }) // Update order status API
//       .then(() => {
//         setOrders((prevOrders) =>
//           prevOrders.map((order) =>
//             order._id === id ? { ...order, status } : order
//           )
//         );
//         alert("Order status updated successfully!");
//       })
//       .catch((error) => console.error("Error updating order status:", error));
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">All Orders</h1>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 px-4 py-2">Order ID</th>
//             <th className="border border-gray-300 px-4 py-2">Customer</th>
//             <th className="border border-gray-300 px-4 py-2">Total</th>
//             <th className="border border-gray-300 px-4 py-2">Status</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id} className="hover:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{order._id}</td>
//               <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
//               <td className="border border-gray-300 px-4 py-2">${order.total}</td>
//               <td className="border border-gray-300 px-4 py-2">{order.status}</td>
//               <td className="border border-gray-300 px-4 py-2 space-x-2">
//                 <button
//                   onClick={() => updateOrderStatus(order._id, "Shipped")}
//                   className="bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Mark as Shipped
//                 </button>
//                 <button
//                   onClick={() => updateOrderStatus(order._id, "Delivered")}
//                   className="bg-blue-500 text-white px-2 py-1 rounded"
//                 >
//                   Mark as Delivered
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllOrder;
