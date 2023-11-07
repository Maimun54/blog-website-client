import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null)
const auth = getAuth(app);
const AuthProvide = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

     const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const loginOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
             setLoader(false)
            console.log('check user',currentUser)
            setUser(currentUser)
            
        })
        return ()=>{
            
            unSubscribe()
        } 
    },[])
    const authInfo ={
        user,
        loader,
        createUser,
        signIn,
        loginOut
    }
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;