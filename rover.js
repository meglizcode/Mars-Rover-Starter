const Command = require("./command");
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
    roverStatGlobal: [],
   }
   
 let messageCommand = message.commands 

for(let i = 0; i < messageCommand.length; i++ )
  if (messageCommand[i].commandType === "MODE_CHANGE"){
    response.results.push(messageCommand);}

  else if (messageCommand[i].commandType === "MOVE"){
   response.results.push(messageCommand);}
   
   else if (messageCommand[i].commandType === "STATUS_CHECK"){
    let roverStatus = {
      position: this.position,
      mode: this.mode,
      generatorWatts: this.generatorWatts
    } 
    response.roverStatGlobal.push(roverStatus)
  }


  
console.log(response)
return response
} 
}
module.exports = Rover;