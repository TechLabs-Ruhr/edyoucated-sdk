import "dotenv/config";

import envvar from "env-var";

export const username = envvar.get("USERNAME").required().asString();
export const password = envvar.get("PASSWORD").required().asString();
export const userPoolID = envvar.get("USER_POOL_ID").required().asString();
export const clientID = envvar.get("CLIENT_ID").required().asString();
export const apiURL = envvar.get("API_URL").required().asString();
export const organizationID = envvar
  .get("ORGANIZATION_ID")
  .required()
  .asString();
