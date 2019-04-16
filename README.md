# blizzy-ts-auth
Authentication service for Blizzy services.

# Setup
This app uses the [Serverless framework](https://github.com/serverless/serverless) to make requests to the [Blizzard World of Warcraft API](https://develop.battle.net).

It also uses some serverless plugins for easy development and testing: 
- [Serverless Offline](https://www.npmjs.com/package/serverless-offline)
- [Serverless Typescript Plugin](https://www.npmjs.com/package/serverless-plugin-typescript)
- [Serverless DotEnv Plugin](https://www.npmjs.com/package/serverless-dotenv-plugin)

To set up, start by running:
```
git clone https://github.com/trisco2001/blizzy-ts-auth.git && cd blizzy-ts-auth
npm install
echo 'APIKEY=' >> .env
echo 'SECRET=' >> .env
```

You'll need to acquire your own API key and secret from Blizzard (or ask me for one).

Once that's set up, you should be able to start a local server:

```
serverless offline -P 3000
```

Assuming all started well and the server is listening, you should be able to use a separate terminal to invoke the endpoint and get and authorization token to use for other Blizzard API requests.

```
curl localhost:3000/auth
```
> {"authToken":"USmx2qIgjY78OSwljDJlStnxN5GXi4W1Qv"}

Note that if you haven't gotten the key and secret set up in your local file, the server will start anyways. But expect to get 401 responses.

> {"error":"An unauthorized status was configured. Check that your environment variables have been properly defined."}
