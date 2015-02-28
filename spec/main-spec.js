var fs = require('fs');
eval(fs.readFileSync('./lib/main.js')+'');

var v = validateThaiCitizenID;

describe("Correct ID", function() {
  it("Normal case", function() {
    expect(v('7150480716044')).toBe(true);
  });
});

describe("Incorrect ID", function() {
  it("First digit should not be 0, 9", function() {
    expect(v('0150480716047')).toBe(false);
    expect(v('9150480716041')).toBe(false);
  });
});
