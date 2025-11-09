import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AuthContext from "./AuthContext";
import { auth } from "../Auth/firebase.config";
// google auth provider

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  // setting auth error
  const [authAlert, setAuthAlert] = useState(null);

  // sign up with email and password
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log("Email: ", email)
        console.log("Password: ", )
        const user = userCredential.user;
        setAuthAlert("Account created successfully!");
        setUser(user);
      })
      .catch((error) => {
        setAuthAlert(error.message);
        console.log(authAlert);
        console.log("error: ", error.message);
      });
  };

  // sign up with email and password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setAuthAlert("Account created successfully!");
        console.log(user);
      })
      .catch((error) => {
        console.log("error: ", error.massage);
      });
  };

  // logout function
  const logout = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    signUp,
    authLoading,
    setAuthLoading,
    logout,
    signIn,
    authAlert,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
