import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";
  import { firebaseAuth } from "./firebase-config";
  
  export interface User {
    uid: string | null;
    displayName: string | null;
  }
  
  const firebaseSignIn = async (
    email: string,
    password: string
  ): Promise<User> => {
    const { user } = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
  
    const { uid, displayName } = user;
    return { uid, displayName };
  };
  
  const firebaseSignUp = async (
    email: string,
    password: string,
    name: string
  ) => {
    const { user } = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
  
    await updateProfile(user, {
      displayName: name,
    });
  
    return user;
  };
  
  export { firebaseSignIn, firebaseSignUp };
  