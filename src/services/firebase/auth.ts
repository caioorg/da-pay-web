import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

interface CredentialsForm {
    email: string,
    password: string
}

type StateDispatch = any

class AuthFirebase {
    static async signInWithGoogle() {
        try {
            const result = await signInWithPopup(FirebaseAuth, googleProvider);
            const { uid } = result.user;
            return uid;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async singnUpWithCredentials({ email, password }: CredentialsForm) {
        try {
            const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
            return result.user.uid;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async loginWithCredentials({ email, password }: CredentialsForm) {
        try {
            const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
            return result.user.uid;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async logout() {
        return await FirebaseAuth.signOut()
    }

    static authStateHasChanged(setSession: StateDispatch) {
        onAuthStateChanged(FirebaseAuth, user => {

            if (!user) return setSession({ status: 'no-authenticated', userId: null })

            setSession({ status: 'authenticated', userId: user!.uid })
        })
    }
}

export default AuthFirebase;
