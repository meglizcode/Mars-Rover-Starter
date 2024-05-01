const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here
  test('constructor sets position and default values for mode and generatorWatts', function(){
    let rover2 = new Rover(98382)
    expect(rover2).toEqual({position: 98382, mode:'NORMAL', generatorWatts: 110})
  })

  // Test 8
  test('response returned by receiveMessage contains the name of the message',function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test message with two commands', commands);
  let rover3 = new Rover(98382);
  let response = rover3.receiveMessage(message);
    expect(response.message).toEqual(message.name)
  })

  // Test 9
  test('response returned by receiveMessage includes two results if two commands are sent in the message',function(){
    let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE')];
    let message = new Message('Test message with two commands', commands);
    let rover4 = new Rover(98382);
    let response = rover4.receiveMessage(message);
    expect(response.results.length).toEqual(2)
 })
  // Test 10 
  test('responds correctly to the status check command', function(){
    let commands = [new Command('STATUS_CHECK')]
    let message = new Message('Test message with two commands', commands);
    let rover4 = new Rover(98382);
    let response = rover4.receiveMessage(message);
    expect(response.roverStatGlobal[0]).toEqual({position: 98382, mode:'NORMAL', generatorWatts: 110})
  })
// Test 11
test('responds correctly to the mode change command', function(){
  
})
 


});