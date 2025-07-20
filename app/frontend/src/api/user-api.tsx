import { UserSchema } from '@/lib/api-response-validation';
import api from './api';
import { zodApiHandler } from './zod-api-handler';


export const userApi = {
    getDashboardData: async () => zodApiHandler(() => api.get('/academic_years'), UserSchema),
};
