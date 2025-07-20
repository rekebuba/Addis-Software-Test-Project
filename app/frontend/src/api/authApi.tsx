import { loginSchema, SignupSchemaType } from '@/lib/validations';
import api from './api';
import { zodApiHandler } from './zod-api-handler';

export const authApi = {
    login: (credentials: { email: string, password: string }) => api.post('/auth/login', credentials),
    signup: (credentials: SignupSchemaType) => api.post('/auth/signup', credentials),
    logout: () => api.post('/auth/logout'),
    refreshToken: () => api.post('/auth/refresh-token'),
    loginWithGoogle: (token: string) => api.post('/auth/google-login', { token }),
};

export const login = async (credentials: { email: string, password: string }) => {
    const response = await zodApiHandler(
        () => authApi.login(credentials),
        loginSchema,
    )

    if (!response.success) {
        throw new Error("login Failed", {
            cause: JSON.stringify(response.error.details),
        });
    }

    return response.data;
};

export default authApi;
