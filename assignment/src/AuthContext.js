import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const login = async (email, password) => {
    try {
      // Simulating login with async delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === 'test@example.com' && password === 'password') {
        setIsLoggedIn(true);
        setError('');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setError('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [user, setUser] = useState(null);  // User state to hold logged-in user data
//   const [error, setError] = useState('');

//   const login = async (email, password) => {
//     try {
//       // Simulating login with async delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       if (email === 'test@example.com' && password === 'password') {
//         setUser({ email, id: '123' });  // Simulated user data
//         setIsLoggedIn(true);
//         setError('');
//       } else {
//         throw new Error('Invalid email or password');
//       }
//     } catch (err) {
//       setError(err.message);
//       throw err;
//     }
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUser(null);
//     setError('');
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, user, login, logout, error }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
