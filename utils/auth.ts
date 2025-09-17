import axios from "axios";

export type SignUpCredentials = {
    roll: number,
    name: string,
    email: string,
    contact: number,        
    password: string,
}

type LoginCredentials = {
    roll: number,
    password: string
}

type TokenResponse = {
    accessToken: string | null,
    refreshToken: string | null
}

const api = axios.create({
    baseURL: "localhost:3000/user",
    timeout: 5000,
    headers: { "Content-Type": "application/json"}
})

export const signupService = (user: SignUpCredentials) => {
    api.post('/signup', {
        roll: user.roll,
        name: user.name,
        email: user.email,
        contact: user.contact,
        password: user.password
    }).then(response => {
        return response.data
    }).catch(error => {
        console.error("Signup error", error);
        throw error;
    });
    
}

export const loginService = (user: LoginCredentials): TokenResponse => {
    api.post('/login', {
        roll: user.roll,
        password: user.password
    }).then(response => {
        return response.data
    }).catch(error => {
        console.error("Login error", error);  
    })
    return { accessToken: null, refreshToken: null };
}

