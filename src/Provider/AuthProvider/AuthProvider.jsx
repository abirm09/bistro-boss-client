import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../Util/Firebase/Firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const logInWithPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign out
  const logOut = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //observe user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUSer => {
      setUser(currentUSer);
      //get and send token
      if (currentUSer?.email) {
        axios
          .post(`http://localhost:5000/jwt`, { email: currentUSer?.email })
          .then(data => {
            localStorage.setItem("access_token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access_token");
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [auth]);
  const data = {
    createUser,
    user,
    logInWithPass,
    loading,
    logOut,
    googleSignIn,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
