import { expect } from "chai";
import {GetAllComplains,sendAComplain} from '../models/complaint.model.js'
// הפונקציה שברצונך לבדוק
function add(a, b) {
  return a + b;
}

describe("פונקציית add", function () {
  it("מחזירה את סכום שני מספרים", function () {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it("מחזירה מספר שלילי כשהסכום שלילי", function () {
    const result = add(-4, -3);
    expect(result).to.equal(-7);
  });

});

describe("GetAllComplains", function () { 
  it("should return all complains", async function () {
    const complains = await GetAllComplains();
    expect(complains).to.be.an("array");
  });
});

describe("sendAComplain", function () {
  it("should send a complain and return the complain object", async function () {
    const complain = {
      subject: "Test Complain",
      complain: "This is a test complain",
    };
    const result = await sendAComplain(complain);
    expect(result).to.have.property("title", "Test Complain");
    expect(result).to.have.property("description", "This is a test complain");
    expect(result).to.have.property("status", "open");
  });
}
);