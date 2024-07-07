// import React, { useState } from 'react';
// import AuthService from './AuthService';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await AuthService.register(email, password);
//       Swal.fire({
//         title: 'Success!',
//         text: 'Registration successful',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/login'); // Redirect to login on successful registration
//       });
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Registration failed',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;




// import React, { useState } from 'react';
// import AuthService from './AuthService';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await AuthService.register(email, password);
//       Swal.fire({
//         title: 'Success!',
//         text: 'Registration successful',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/login'); // Redirect to login on successful registration
//       });
//     } catch (err) {
//       console.error(err);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Registration failed',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYTgd2Yf6sKu2ZWwN48mMeqz6wriIc9nPjw&s")', 
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       color: '#fff',
//       textAlign: 'center'}}>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login'); // Redirect to login on successful registration
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: 'Registration failed',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsU41Y0jOw3lttMu4TCEaadptaCSqgDtg3aA&s")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: '#fff',
      textAlign: 'center'
    }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', color: '#fff' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginBottom: '5px', color: '#fff' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '94%', padding: '8px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '3px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;

