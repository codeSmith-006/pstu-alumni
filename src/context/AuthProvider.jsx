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

  // sign up with email and password
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  // sign up with email and password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error: ", error);
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
