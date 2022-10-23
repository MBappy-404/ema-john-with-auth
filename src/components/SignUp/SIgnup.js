import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SIgnup = () => {

     // const {} = useContext(AuthContext);
     const [error, setError] = useState(null);   
     const {createUser} = useContext(AuthContext); 
     const MySwal = withReactContent(Swal);
     const navigate = useNavigate();


     const handleSubmit = (e) =>{
      
          e.preventDefault();

          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          const confirmPass = form.confirmPass.value;
          console.log(email, password,confirmPass);

          if(password !== confirmPass){

               setError('Your Password did not match')
          }
          if(password.length < 6){
               setError('Password Must be 6 character')
          }

          createUser(email,password)
          .then(result=>{
               const user = result.user;
               console.log(user);
               form.reset();
               navigate('/shop')
               MySwal.fire({
                    icon: 'success',
                    title: 'Registration SuccessFully...',
                    text: 'You Can Access All Feature!',
               });
          })

          .catch(error=> console.error(error))


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
                         <input type="password" name='password' placeholder='Enter Your password' required />
                    </div>
                    <div className='form-control'>
                         <label htmlFor="">Confirm Password</label>
                         <input type="password" name='confirmPass' placeholder='Enter Your Confirm Password' required />
                    </div>
                    <input type="submit" className='submit' />
                    <br />
                   <p> <span>{error}</span></p>
               </form>
               <p>Already have an account <Link to="/login">Sign In</Link> </p>
          </div>
     );
};

export default SIgnup;