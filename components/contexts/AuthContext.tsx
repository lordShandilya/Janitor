import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch the token.
SplashScreen.preventAutoHideAsync();

// --- TYPES ---
// A single, clear type for the context data
type AuthContextData = {
    signIn: (token: string) => Promise<void>;
    signOut: () => Promise<void>;
    token: string | null;
    isLoading: boolean; // Expose loading state if needed by UI
};

// Types for the reducer
type AuthState = {
    token: string | null;
    isLoading: boolean;
};

type AuthAction =
    | { type: 'SIGN_IN'; token: string }
    | { type: 'SIGN_OUT' }
    | { type: 'RESTORE_TOKEN'; token: string | null };

// --- CONTEXT ---
// Use the complete type for the context. It can be undefined if not used within a provider.
export const AuthContext = createContext<AuthContextData | undefined>(undefined);

// --- REDUCER ---
const authReducer = (prevState: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...prevState,
                token: action.token,
                isLoading: false,
            };
        case 'SIGN_IN':
            return {
                ...prevState,
                token: action.token,
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                token: null,
            };
        default:
            return prevState;
    }
};

// --- PROVIDER COMPONENT ---
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isLoading: true,
        token: null,
    });

    // Effect to restore the token on app start
    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken: string | null = null;
            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                console.error("Restoring token failed", e);
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    // Effect to hide the splash screen once loading is finished
    useEffect(() => {
        if (!state.isLoading) {
            SplashScreen.hideAsync();
        }
    }, [state.isLoading]);
    
    // Memoize the context value to prevent unnecessary re-renders
    const authContextValue = useMemo(() => ({
        token: state.token,
        isLoading: state.isLoading,
        signIn: async (token: string) => {
            try {
                await SecureStore.setItemAsync('userToken', token);
                dispatch({ type: 'SIGN_IN', token });
            } catch (e) {
                console.error("Sign in failed", e);
                // Optionally handle sign-in error (e.g., show a toast message)
            }
        },
        signOut: async () => {
            try {
                await SecureStore.deleteItemAsync('userToken');
                dispatch({ type: 'SIGN_OUT' });
            } catch (e) {
                console.error("Sign out failed", e);
                 // Optionally handle sign-out error
            }
        },
    }), [state.token, state.isLoading]);

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// --- CUSTOM HOOK ---
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};