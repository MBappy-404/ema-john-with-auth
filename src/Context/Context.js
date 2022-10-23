import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config'


export const AuthContext = createContext();
const auth = getAuth(app);


const Context = ({ children }) => {
     const [user, setUser] = useState();
     const [loading, setLoading] = useState(true);
     // const user = { email: 'abcd' };
     const createUser = (email,password) =>{
          setLoading(true);
          return createUserWithEmailAndPassword(auth,email,password)
     }

     const signIn = (email,password) => {
          setLoading(true);
         return signInWithEmailAndPassword(auth, email, password);
          
          
     };

     const logOut = ()=>{
     setLoading(true)
     return signOut(auth);
          
     }

     useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,createUser =>{
               console.log(createUser);
               setUser(createUser);
               setLoading(false);
          })

          return () => unsubscribe();
          
     },[])
     const authInfo = { user,createUser,signIn,logOut,loading }

     return (
          <AuthContext.Provider value={authInfo}>

               {children}

          </AuthContext.Provider>
     );
};

export default Context;