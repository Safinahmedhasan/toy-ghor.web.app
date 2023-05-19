import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const googleSignIn = () => {
        setLoading(true);
        const googleSignIn = new GoogleAuthProvider();
        return signInWithPopup(auth ,googleSignIn);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user' , currentUser);
            setLoading(false);
        });
        
        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;