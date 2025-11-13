export declare const validate: import("ajv").ValidateFunction<unknown>;
import { z } from "zod";
export declare const WatchersSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    cmd: z.ZodString;
    watch: z.ZodArray<z.ZodString>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strict>>;
export declare function zod_validate(input: unknown): boolean;
export type Watchers = z.infer<typeof WatchersSchema>;
