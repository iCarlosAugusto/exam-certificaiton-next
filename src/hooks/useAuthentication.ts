import { app } from "@/firebase/config";
import { GoogleAuthProvider, User, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { create } from 'zustand'

const useAuthentication = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const currentUser = auth.currentUser;

    const saveUser = async (user: User) => {

    }

    const authenticateWithGoogle = async () => {
        
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user
            await saveUser(user);
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    const authenticateWithGithub = async () => {

    }

    const createAccountWithEmailAndPassword = async (email: string, password: string) => {
        const result = await createUserWithEmailAndPassword(auth, "carlos@yopmail.com", "123456");
        console.log(result);
    }

    return {
        authenticateWithGoogle,
        authenticateWithGithub,
        createAccountWithEmailAndPassword,

        currentUser
    }
}

export { useAuthentication }