import z from "zod";
import { RoleEnum } from "./enums";

export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    role: RoleEnum,
    name: z.string(),
    email: z.string().email(),
    imagePath: z.string().optional(),
});

export type UserProfile = z.infer<typeof UserSchema>;
