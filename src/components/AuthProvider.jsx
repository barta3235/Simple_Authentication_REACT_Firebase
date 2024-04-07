import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
import auth from '../firebase/firebase.config'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext('auth');

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);

    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);   
        });

        return()=> {
            unSubscribe();
        }
    },[])

    const authInfo={createUser,signInUser,logOut,user,setUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;