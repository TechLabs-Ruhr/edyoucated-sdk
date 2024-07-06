import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { GraphQLClient } from "graphql-request";

import { getSdk } from "./generated/graphql";

type EdyoucatedConfig = {
  username: string;
  password: string;
  userPoolID: string;
  clientID: string;
  apiURL: string;
};

export const edyoucatedSDK = async ({
  username,
  password,
  userPoolID,
  clientID,
  apiURL,
}: EdyoucatedConfig) => {
  const login = (
    username: string,
    password: string,
    userPoolID: string,
    clientID: string
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const authenticationDetails =
        new AmazonCognitoIdentity.AuthenticationDetails({
          Username: username,
          Password: password,
        });
      const userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: userPoolID,
        ClientId: clientID,
      });
      const userData = {
        Username: username,
        Pool: userPool,
      };
      const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
      cognitoUser.setAuthenticationFlowType("USER_PASSWORD_AUTH");
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          resolve(result.getIdToken().getJwtToken());
        },
        onFailure: function (err) {
          reject(err);
        },
      });
    });
  };

  const buildClient = (token: string, apiURL: string) => {
    return new GraphQLClient(apiURL, {
      headers: {
        Authorization: token,
      },
    });
  };

  const loginToken = await login(username, password, userPoolID, clientID);
  const client = buildClient(loginToken, apiURL);

  return getSdk(client);
};

export type EdyoucatedSDK = Awaited<ReturnType<typeof edyoucatedSDK>>;
