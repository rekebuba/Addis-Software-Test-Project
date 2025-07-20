import { z } from "zod";
import { RoleEnum } from "./enums";

export const jwtPayloadSchema = z.object({
    id: z.string(),
    exp: z.number(),
    role: RoleEnum,
    jti: z.string(),
});
export type JwtPayloadType = z.infer<typeof jwtPayloadSchema>;

const roleSchema = z.preprocess(
    (val) => typeof val === "string" ? val.toLowerCase() : val,
    RoleEnum
);

export const loginSchema = z.object({
    id: z.string(),
    apiKey: z.string(),
    role: roleSchema,
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const logoutSchema = z.object({
    message: z.string(),
});

export const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SignupSchemaType = z.infer<typeof signupSchema>;
