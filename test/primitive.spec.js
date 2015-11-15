require("chai").should();
var serialize = require("..").serialize;
var deserialize = require("..").deserialize;

it("primitive null", function() {
	var value = serialize(null)[0];
	value.data.should.equal("null");
});

it("primitive number", function() {
	var value = serialize(1)[0];
	value.data.should.equal("1");
});

it("primitive string", function() {
	var value = serialize("a")[0];
	value.data.should.equal("\"a\"");
});