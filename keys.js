import dotenv from "dotenv";

dotenv.config();

const keys = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
};

const checkEnvVariables = () => {
  for (let key in keys) {
    if (!keys[key]) {
      throw new Error(`${key} must be defined`);
    }
  }
};

export { keys, checkEnvVariables };
