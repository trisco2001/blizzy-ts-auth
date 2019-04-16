import { Handler, Context, Callback } from "aws-lambda";
import { Environment } from "./Environment";
import { AuthTokenService } from "./AuthTokenService";

interface BasicResponse {
  statusCode: number
  body: string,
  headers: any
}

const handler: Handler = async (event: any, context: Context, callback: Callback) => {
  const environment = new Environment()
  const authTokenService = new AuthTokenService(environment)

  console.log("Generating Token")
  try {
    const response = await authTokenService.generateToken()
    const token = response.data['access_token']
    const status = response.status
    return { 
      statusCode: status, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({authToken: token})
    }
  } catch (error) {
    const response = error.response;
    const responseText = response.status == 401 ? "An unauthorized status was configured. Check that your environment variables have been properly defined." : response.statusText
    return { 
      statusCode: response.status, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({error: responseText})
    }
  }
};

export { handler }