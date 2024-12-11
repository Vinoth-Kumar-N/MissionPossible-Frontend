// // src/Context/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const AuthContext = createContext();

// const useAuth = () => useContext(AuthContext);
// // Create a provider component
// export const AuthProvider = ({ children }) => {
//   const [isLoggout, setIsLoggout] = useState(false);

//   const logout = () => {
//     // Handle logout logic
//     console.log('Logging out...');
//     setIsLoggout(true);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggout, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
