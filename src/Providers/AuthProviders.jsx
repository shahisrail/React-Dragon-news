import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebas/Firebas.cofig";
import { useEffect } from "react";

export const AuthContext = createContext(null)


const auth = getAuth(app);


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading,setLoading] = useState(true)

  // create registatoin
  const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // creat login 
  const Signin = (email, password) => {
        setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  

  //  log out 
  const logout = () => {
        setLoading(true);
    return signOut(auth)
    
  } 


  // manage user  
  useEffect(() => {
   const usnSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state change', currentUser);
     setUser(currentUser)
     setLoading(false)
    })
    return () => {
      usnSubscribe()
    }
  },[])
   




  const authInfo = {
    user,
    creatUser,
    logout,
    Signin,
    loading
  }
  return (
    <AuthContext.Provider  value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;