import Joi from "joi";
import { STATUS } from "../../models/serviceInstance.model";

const schema = Joi.object({
  protocol: Joi
    .string()
    .valid('http', 'https'),
  ip: Joi
    .alternatives()
    .try(
      Joi.string().ip(),
      Joi.string().valid('localhost')
    ),
  port: Joi
    .string()
    .regex(/^\d{2,6}$/)
    .message('Port must be a string and contain numbers between 10 and 999999'),
  status: Joi
    .string()
    .valid(...Object.keys(STATUS).map(el => el.toLowerCase())).insensitive()
    .required()
});

export const validatePost = (data: any) => {
  const { value, error } = schema.options({ presence: 'required', abortEarly: false }).validate(data)
  if (error) {
    throw new Error(error.message);
  }
}
export const validatePatch = (data: any) => {
  const { value, error } = schema.options({ abortEarly: false, convert: true }).validate(data)
  if (error) {
    throw new Error(error.message);
  }
}