import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContex = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create User With Google
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // createUser
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscrive = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscrive();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        logOut,
        setUser,
        googleLogin
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;