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
  // setting auth error / messages
  const [authAlert, setAuthAlert] = useState(null);

  // normalize firebase user and get fresh ID token
  const handleFirebaseUser = async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      return null;
    }

    let idToken = null;
    try {
      idToken = await firebaseUser.getIdToken(false);
    } catch (err) {
      console.error("Failed to get ID token:", err);
    }

    const normalized = {
      uid: firebaseUser.uid,
      email: firebaseUser.email || null,
      displayName: firebaseUser.displayName || null,
      photoURL: firebaseUser.photoURL || null,
      emailVerified: !!firebaseUser.emailVerified,
      phoneNumber: firebaseUser.phoneNumber || null,
      createdAt: firebaseUser.metadata?.creationTime || null,
      lastSignInTime: firebaseUser.metadata?.lastSignInTime || null,
      accessToken: idToken,
      // keep the raw firebase user only if you need it:
      raw: firebaseUser,
    };

    setUser(normalized);
    return normalized;
  };

  // sign up with email and password
  const signUp = async (email, password) => {
    setAuthLoading(true);
    setAuthAlert(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      // normalize and set user
      await handleFirebaseUser(firebaseUser);

      setAuthAlert("Account created successfully!");
      return userCredential.user;
    } catch (error) {
      // Firebase error message
      setAuthAlert(error.message || "Failed to create account");
      console.error("signUp error:", error);
      return null;
    } finally {
      setAuthLoading(false);
    }
  };

  // sign in with email and password
  const signIn = async (email, password) => {
    setAuthLoading(true);
    setAuthAlert(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      // normalize and set user
      await handleFirebaseUser(firebaseUser);

      setAuthAlert("Signed in successfully!");
      return userCredential.user;
    } catch (error) {
      setAuthAlert(error.message || "Failed to sign in");
      console.error("signIn error:", error);
      return null;
    } finally {
      setAuthLoading(false);
    }
  };

  // logout function
  const logout = async () => {
    setAuthLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setAuthAlert(null);
    } catch (err) {
      console.error("logout error:", err);
    } finally {
      setAuthLoading(false);
    }
  };

  // get current user and subscribe to auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // normalize if exist
      if (currentUser) {
        await handleFirebaseUser(currentUser);
      } else {
        setUser(null);
      }
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
