//import type {User} from './my_types.ts'
import {Ajv} from "ajv";
import schema from "../generated/my_types.schema.json" with { type: "json" };

const ajv = new Ajv();
export const validate = ajv.compile(schema);
import { z } from "zod";
export const WatchersSchema = z.record(
  z.string(),
  z.object({
    cmd: z.string(),
    watch: z.array(z.string()),
    env:z.record(z.string(),z.string()).optional()
  }).strict()
);
export function zod_validate(input:unknown){
  try{
    const ans=WatchersSchema.parse(input);
    //console.log(ans)
    return true
  }catch(ex:unknown){
    return false
  }
}



export type Watchers = z.infer<typeof WatchersSchema>;
/*export function  validateUser(data: unknown): data is User {
  const valid = validate(data);
  if (!valid) console.error(validate.errors);
  return valid;
}
*/
