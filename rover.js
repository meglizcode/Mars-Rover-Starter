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

   }
   
 let messageCommand = message.commands 

for(let i = 0; i < messageCommand.length; i++ ){
  if (messageCommand[i].commandType === "MODE_CHANGE"){
    this.mode = messageCommand[i].value;
    response.results.push({completed: true});
  }
  if (messageCommand[i].commandType === "MOVE"){
   if (this.mode === 'LOW_POWER')
   response.results.push({completed: false})
  else if (this.mode === 'NORMAL')
    response.results.push({completed: true})
  }
  if (messageCommand[i].commandType === "STATUS_CHECK"){
    let roverStatus = {
      position: this.position,
      mode: this.mode,
      generatorWatts: this.generatorWatts
    } 
    response.results.push({completed: true, roverStatus: roverStatus})
  }
  if (this.mode === 'NORMAL' && messageCommand[i].commandType === "MOVE"){
    this.position = messageCommand[i].value
  }
}

  
console.log(response)
return response
} 
}
module.exports = Rover;