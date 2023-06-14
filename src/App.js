// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Homepage from "./Pages/Homepage";

// import AppLayout from "./Theme/AppLayout"
// import  Blog from  "../src/Pages/Blog"
// import LoginLayout from "./Theme/LoginLayout"
// import { useAuth0 } from "@auth0/auth0-react";






// function App() {
//   const {
//     loginWithPopup,
//     loginWithRedirect,
//      logout, 
//      user, 
//      isAuthenticated
//     } = useAuth0();

//   return (
//     <div className="App">
   
//      <Router>
//       <div className="App">
//       <ul style={{listStyle:"none"}}>
//         <li>
//           <button onClick={loginWithPopup}>Login with popup</button>
//         </li>
//         <li>
//           <button onClick={loginWithRedirect}>Login with Redirect</button>
//         </li>
//         <li>
//           <button onClick={logout}>Logout</button>
//         </li>
        
        
//       </ul>
//       <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in "}</h3>
//       {isAuthenticated && (
//   <pre style={{ textAlign: 'start' }}>
//     {user.email}
//   </pre>
// )}



     

//         <Routes>
//           <Route path="/" element={<LoginLayout />} />
//           <Route path="/app" element={<AppLayout />} />
//           <Route path="/homepage" element={<Homepage />} />
//           <Route path="/blog" element={<Blog />} />
//         </Routes>
//       </div>
//     </Router>
  

   
   
//    </div>
//   );
// }




// export default App;










// 2.Working with Homepage rendering
// import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
// import AppLayout from "./Theme/AppLayout";
// import Blog from "../src/Pages/Blog";
// import LoginLayout from "./Theme/LoginLayout";
// import { useAuth0 } from "@auth0/auth0-react";

// function App() {
//   const {
//     loginWithPopup,
//     loginWithRedirect,
//     logout,
//     user,
//     isAuthenticated
//   } = useAuth0();

//   return (
//     <div className="App">
//       <Router>
//         <div className="App">
//           <ul style={{ listStyle: "none" }}>
//             {/* <li>
//               <button onClick={loginWithPopup}>Login with popup</button>
//             </li> */}
//             <li>
//               <button onClick={loginWithRedirect}>Login </button>
//             </li>
//             <li>
//               <button onClick={logout}>Logout</button>
//             </li>
//           </ul>
//           <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in "}</h3>
//           {isAuthenticated && (
//             <pre style={{ textAlign: 'start' }}>
//               {user.email}
//             </pre>
//           )}
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 isAuthenticated ? <Navigate to="/homepage" /> : <LoginLayout />
//               }
//             />
//             <Route path="/homepage" element={<Homepage />} />
//             <Route path="/app" element={<AppLayout />} />
//             <Route path="/blog" element={<Blog />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;






import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AppLayout from "./Theme/AppLayout";
import Blog from "../src/Pages/Blog";
import LoginLayout from "./Theme/LoginLayout";
import { useAuth0 } from "@auth0/auth0-react";
import PersonIcon from '@mui/icons-material/Person';

function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0();

  return (
    <div className="App">
      <Router>
        <div className="App">
             <div className="heading-div">
            
         <div className="main-div-2">
       
         {/* <p> User  is {isAuthenticated ? "Logged in" : "Not Logged in "}</p> */}
          {isAuthenticated && (
            <p style={{ textAlign: 'start', color:'black' }}>
              <PersonIcon /> {user.email}
            </p>
          )}
         </div>
         <div className="main-div-1">
         <ul style={{ listStyle: "none" }}>
            {!isAuthenticated && (
              <li>
                <button  className="button-container"  onClick={loginWithRedirect}>Login</button>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <button  className="button-container"  onClick={logout}>Logout</button>
              </li>
            )}
          </ul>
         </div>
         


             </div>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/homepage" /> : <LoginLayout />
              }
            />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/app" element={<AppLayout />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

