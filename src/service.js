import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, db } from './firebase-config';
import { addDoc, collection } from 'firebase/firestore';

export const signinServices = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const signupServices = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => {
  signOut(auth);
};
