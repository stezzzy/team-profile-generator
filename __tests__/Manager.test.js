const Manager = require("../lib/Manager");

describe('Generate Manager', () => {
    it('When generating Managers, values should be displayed correctly', () => {
      const newMan = new Manager("Nick", 217, "nick@nick.com", "571A");
      expect(newMan.name).toEqual("Nick");
      expect(newMan.id).toEqual(217);
      expect(newMan.email).toEqual("nick@nick.com");
      expect(newMan.officeNumber).toEqual("571A");
    });
  });
  
  describe('Creating Class Functions', () => {
    it("The functions for Employee should return the correct values", () => {
      const newMan = new Manager("Nick", 217, "nick@nick.com", "571A");
      expect(newMan.getRole()).toEqual("Manager");
      expect(newMan.getName()).toEqual("Nick");
      expect(newMan.getId()).toEqual(217);
      expect(newMan.getEmail()).toEqual("nick@nick.com");
      expect(newMan.getOfficeNumber()).toEqual("571A");
    });
  
  });