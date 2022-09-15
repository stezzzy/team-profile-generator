const Engineer = require("../lib/Engineer");

describe('Generate Engineer', () => {
    it('When generating Engineers, values should be displayed correctly', () => {
      const newEng = new Engineer("Nick", 217, "nick@nick.com", "githubacc");
      expect(newEng.name).toEqual("Nick");
      expect(newEng.id).toEqual(217);
      expect(newEng.email).toEqual("nick@nick.com");
      expect(newEng.github).toEqual("githubacc");
    });
  });
  
  describe('Creating Class Functions', () => {
    it("The functions for Employee should return the correct values", () => {
      const newEng = new Engineer("Nick", 217, "nick@nick.com", "githubacc");
      expect(newEng.getRole()).toEqual("Engineer");
      expect(newEng.getName()).toEqual("Nick");
      expect(newEng.getId()).toEqual(217);
      expect(newEng.getEmail()).toEqual("nick@nick.com");
      expect(newEng.getGithub()).toEqual("githubacc");
    });
  
  });