const Message = require("./message");

class Rover {
  constructor(position) {
   this.position = position
   this.mode = 'NORMAL'
   this.generatorWatts = 110
  }

receiveMessage(message) {
   let response = {
    message: message.name,
    results: [],
   }
 let messageCommand = message.commands
for(let i = 0; i < messageCommand.length; i++ )
   if (messageCommand[i].commandType === "MODE_CHANGE")
   response.results.push(messageCommand)

  
console.log(response)
return response
} 
}
module.exports = Rover;