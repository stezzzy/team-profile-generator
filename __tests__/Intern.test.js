const Intern = require("../lib/Intern");

describe('Generate Intern', () => {
    it('When generating Interns, values should be displayed correctly', () => {
      const newInt = new Intern("Nick", 217, "nick@nick.com", "Seton Hall University");
      expect(newInt.name).toEqual("Nick");
      expect(newInt.id).toEqual(217);
      expect(newInt.email).toEqual("nick@nick.com");
      expect(newInt.school).toEqual("Seton Hall University");
    });
  });
  
  describe('Creating Class Functions', () => {
    it("The functions for Interns should return the correct values", () => {
      const newInt = new Intern("Nick", 217, "nick@nick.com", "Seton Hall University");
      expect(newInt.getRole()).toEqual("Intern");
      expect(newInt.getName()).toEqual("Nick");
      expect(newInt.getId()).toEqual(217);
      expect(newInt.getEmail()).toEqual("nick@nick.com");
      expect(newInt.getSchool()).toEqual("Seton Hall University");
    });
  
  });