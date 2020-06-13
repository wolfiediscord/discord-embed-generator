exports = () => {
throw new Error("SyntaxError: Invalid usage of module 'discord-embed-generator'. Must include a method.")
}
exports.success = (msg) => {
if(!msg) throw new Error('ReferenceError: Provided message was blank.')
if(typeof msg !== 'string') throw new Error('TypeError: Message is not a string.');
    let embed = {
     description: `✅ ${msg}`,
     color: 0x2fa811
   }
   return embed;
}
exports.warn = (msg) => {
if(!msg) throw new Error('ReferenceError: Provided message was blank.')
if(typeof msg !== 'string') throw new Error('TypeError: Message is not a string.');
    let embed = {
     description: `⚠️ ${msg}`,
     color: 0xfced1c
    }
    return embed;
}
exports.info = (msg) => {
if(!msg) throw new Error('ReferenceError: Provided message was blank.')
if(typeof msg !== 'string') throw new Error('TypeError: Message is not a string.');
    let embed = {
    description: `ℹ️ ${msg}`,
    color: 0x3c8de7
    }
    return embed;
}
exports.error = (msg) => {
if(!msg) throw new Error('ReferenceError: Provided message was blank.')
if(typeof msg !== 'string') throw new Error('TypeError: Message is not a string.');
    let embed = {
      description: `❌ ${msg}`,
      color: 0xff0000
    }
    return embed;
}
