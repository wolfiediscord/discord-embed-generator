exports.success = (msg) => {
if(!msg) throw new Error('ReferenceError: A message wasn\'t defined on the function.')
    let embed = {
     description: `✅ ${msg}`,
     color: 0x2fa811
   }
   return embed;
}
exports.warn = (msg) => {
if(!msg) throw new Error('ReferenceError: A message wasn\'t defined on the function.')
    let embed = {
     description: `⚠️ ${msg}`,
     color: 0xfced1c
    }
    return embed;
}
exports.info = (msg) => {
if(!msg) throw new Error('ReferenceError: A message wasn\'t defined on the function.')
    let embed = {
    description: `ℹ️ ${msg}`,
    color: 0x3c8de7
    }
    return embed;
}
exports.error = (msg) => {
if(!msg) throw new Error('ReferenceError: A message wasn\'t defined on the function.')
    let embed = {
      description: `❌ ${msg}`,
      color: 0xff0000
    }
    return embed;
}
