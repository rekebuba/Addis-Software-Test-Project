import { z } from 'zod';

export const RoleEnum = z.enum([
    "user",
]);
export type RoleEnumType = z.infer<typeof RoleEnum>;
