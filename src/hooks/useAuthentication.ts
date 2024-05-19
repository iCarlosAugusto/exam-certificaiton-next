import { app } from "@/firebase/config";
import { GoogleAuthProvider, User, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

const useAuthentication = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const [isLoading, setIsLoading] = useState(false);


    const saveUser = async (user: User) => {

    }

    const authenticateWithGoogle = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user
            await saveUser(user);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const authenticateWithGithub = async () => {

    }

    return {
        authenticateWithGoogle,
        authenticateWithGithub,
        isLoading
    }
}

export { useAuthentication }