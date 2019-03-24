import { Handler, Context, Callback } from "aws-lambda";
import { Environment } from "./Environment";
import { AuthTokenService } from "./AuthTokenService";

interface BasicResponse {
  statusCode: number
  body: string
}

const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  const environment = new Environment()
  const authTokenService = new AuthTokenService(environment)

  console.log("Generating Token")
  const response = await authTokenService.generateToken()
  const token = response.data['access_token']
  const status = response.status
  callback(null, { statusCode: status, body: JSON.stringify({authToken: token})})
};

export { handler }