import { z } from "zod";

const PORT_REGEX = /^\d{1,5}$/;
const IP_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

const envObject = z.object({});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envObject> {}
  }
}

function parseEnvVariables() {
  const parsed = envObject.safeParse(process.env);
  if (!parsed.success) {
    throw parsed.error.errors;
  }
  console.log("Process env parsed succesfully...");
}

export default parseEnvVariables;
