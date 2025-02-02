// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from "react";
// // import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import './index.css'
// import App from './App.jsx'
// // import './styles/custom.css';


// createRoot(document.getElementById('root')).render(

//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
  
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppState from './context/AppState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppState>
    <App />
  </AppState>,
)