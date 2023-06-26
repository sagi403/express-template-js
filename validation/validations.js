import validateRequest from "../middleware/validateRequest.js";
import { testUserValidation } from "./userValidation.js";

const testUserMiddleware = [testUserValidation, validateRequest];

export default testUserMiddleware;
