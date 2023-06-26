import { body, param, query } from "express-validator";

export const testUserValidation = [
  body("name").isString().isLength({ min: 2 }),
];
