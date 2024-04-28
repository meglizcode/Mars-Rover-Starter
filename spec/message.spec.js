const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// Test 4

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
      expect( function() { new Message();}).toThrow(new Error("Name Required."));
    });
  
// Test 5
     test("constructor sets name", function(){
      let name = "Test Name";
      let command = "Test"
      let testMessage = new Message("Test Name","Test")
      expect(testMessage.name).toEqual("Test Name");
      });

  });