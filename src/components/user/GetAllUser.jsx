// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const GetAllUser = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('/api/users')
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the users!', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>All Users</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>{user.name} - {user.email}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default GetAllUser;


import { useEffect, useState } from "react";
import axios from "axios";

const GetAllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1000/api/user") // API endpoint
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllUser;
