import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Login.css'

const Login = () => {
     const [error, setError] = useState(null);
     const { signIn } = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/';
     const MySwal = withReactContent(Swal)


     const handleSubmit = (e) => {
          e.preventDefault();

          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);


          if (password.length < 6) {
               setError('Password Must be 6 character')
          }

          signIn(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    navigate(from, { replace: true });
                    MySwal.fire({
                         icon: 'success',
                         title: 'Log In SuccessFully...',
                         text: 'Happy Shopping',
                    });
               })

               .catch(error => console.error(error))
     }

     return (
          <div className='form-container'>
               <h2>Login</h2>
               <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                         <label htmlFor="">Email</label>
                         <input type="email" name='email' placeholder='Enter Your Email' required />

                    </div>
                    <div className='form-control'>
                         <label htmlFor="">Password</label>
                         <input type="password" name='password' placeholder='Enter Your Password' required />

                    </div>
                    <input type="submit" className='submit' />
                    <br />
                    <p> <span>{error}</span></p>
               </form>
               <p>New to ema john <Link to="/signup">Create Account</Link> </p>
          </div>
     );
};

export default Login;