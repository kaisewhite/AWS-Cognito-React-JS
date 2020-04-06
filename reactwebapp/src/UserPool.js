import { CognitoUserPool } from "amazon-cognito-identity-js";
// Create an object that holds some information about our user pool
// Found in the dashboard
const poolData = {
  UserPoolId: "us-east-1_rohQSn5VC",
  ClientId: "7kjdf8jsdbm50rp5n0r6lrhni0" // App Client ID in Cognito -> App Clients
};

export default new CognitoUserPool(poolData);
