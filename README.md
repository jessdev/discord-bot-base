# Base for a Discord Bot
This is a good starting point for anyone that wants to build a discord bot in typescript and use jest as a testing library.
Make sure you update the following once you clone the repo:
1. package.json name and descriptions
2. The license
3. This read me 

To set up your bot for connecting to discord [go here](https://discord.com/developers/applications)

# Running
use the command `npm run start` to build and run the typescript project.
Under the covers it runs:
```
npm run build
node dist/bot.js
```
# Build Docker Container
```
docker build . --tag <your-tag>
```

# Running Docker Container
```
docker run --env-file .\.env --mount type=bind,src=<path to data folder>,dst=/app/data <your-tag>
```

## Setting up Authentication
On windows - `$env:DISCORD_TOKEN = '<the token>'`

### Environment Variables

#### When running without docker

set

```
$env:DISCORD_TOKEN = <token>
$env:DATABASE = <database file path>
```

#### For docker

 create .env file with

```
DISCORD_TOKEN=<token>
DATABASE=<databasefile>
```
