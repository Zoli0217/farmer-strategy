import axios from "axios";
import { scumbagAPI } from "./instance";

type RegisterResponse = {
    message: string;
    user: {
        id: number;
        username: string;
        email: string;

    }
}

type LoginResponse = {
    acces: string;
    refresh: string;
}

export async function registerUser(username: string, password: string, email: string): Promise<RegisterResponse>{
    try {
        const response = await scumbagAPI.post('/api/auth/register/', { username, password, email });
        return response.data as RegisterResponse;
    }
    catch (error) {
        throw new Error('Registration failed');
    }
}

export async function loginUser(username: string, password: string): Promise<LoginResponse> {
    try{
        const response = await scumbagAPI.post('/api/auth/token/', { username, password });
        const tokens = response.data as LoginResponse;

        localStorage.setItem("access", tokens.acces)
        localStorage.setItem("refresh", tokens.refresh)

        return tokens;
    } catch (error) {
        throw new Error("Login failed")
    }
}

type UserData = {
    user: {
        id: number,
        username: string
    },
    profile: {
        id: number
    }
}

export async function getMe(){
    try{
        const response = await scumbagAPI.get('/api/auth/me/');
        return response.data as UserData;
    }catch (error){
        throw new Error("No User Data Very sad")
    }
}