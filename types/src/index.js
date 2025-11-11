import { Ajv } from "ajv";
import schema from "../generated/my_types.schema.json" with { type: "json" };
const ajv = new Ajv();
const validate = ajv.compile(schema);
export function validateUser(data) {
    const valid = validate(data);
    if (!valid)
        console.error(validate.errors);
    return valid;
}
