import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Auth/firebase.config";
// google auth provider
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // sign in with google func
  const loginWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
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
    loginWithGoogle,
    authLoading,
    setAuthLoading,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
