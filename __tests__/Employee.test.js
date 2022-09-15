const Employee = require("../lib/Employee");

describe('Generate Employees', () => {
    it('When generating Employees, values should be displayed correctly', () => {
      const newEmp = new Employee("Nick", 217, "nick@nick.com");
      expect(newEmp.name).toEqual("Nick");
      expect(newEmp.id).toEqual(217);
      expect(newEmp.email).toEqual("nick@nick.com");
    });
  });
  
  describe('Creating Class Functions', () => {
    it("The functions for Employee should return the correct values", () => {
      const newEmp = new Employee("Nick", 217, "nick@nick.com");
      expect(newEmp.getRole()).toEqual("Employee");
      expect(newEmp.getName()).toEqual("Nick");
      expect(newEmp.getId()).toEqual(217);
      expect(newEmp.getEmail()).toEqual("nick@nick.com");
    });
  
  });