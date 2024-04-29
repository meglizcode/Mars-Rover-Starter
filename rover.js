const Message = require("./message");

class Rover {
  constructor(position) {
   this.position = position
   this.mode = 'NORMAL'
   this.generatorWatts = 110
  }
// Test 8
receiveMessage(message) {
   let response = {
      message: Message.name
}
return response

} 
}
module.exports = Rover;