# discord-embed-generator
An error, success, information, and warning embed generator for Discord.JS.

# Documentation

## Installing
To install this module, type into your terminal:

`npm install wolfiediscord/discord-embed-generator`

## Utilizing 

First, you need to require the module. 
```js
const embed = require('discord-embed-generator');
```
Then, that's it! Read the usage below to actually utilize it.

## Usage

### embed.error(msg)
Type: `Function`

Parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg`     | String    | The embed content.            |

Returns: `Object`

Example: 
```js
let error = embed.error('Uh oh! Something went wrong!');
message.channel.send({embed: error});
```

### embed.success(msg)
Type: `Function`

Parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg`     | String    | The embed content.            |

Returns: `Object`

Example:
```js
let success = embed.success('The task completed successfully!');
message.channel.send({embed: success});
```

### embed.info(msg)
Type: `Function`

Parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg`     | String    | The embed content.            |

Returns: `Object`

Example:
```js
let info = embed.info('The weather is Sunny.');
message.channel.send({embed: info});
```

### embed.warn(msg)
Type: `Function`

Parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg`     | String    | The embed content.            |

Returns: `Object`

Example:
```js
let warning = embed.warn('Are you sure you want to do that?');
message.channel.send({embed: warning});
```

