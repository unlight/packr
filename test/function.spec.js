require("chai").should();
var serialize = require("..").serialize;
var deserialize = require("..").deserialize;

it("function contains body", function() {
	var value = serialize(function(b) {
		return b;
	})[0];
	value.data.should.contains("return b");
});

it("function return first argument", function() {
	var fn = function(b) {
		return b;
	};
	var serialized = serialize(fn);
	var unpackedFunc = deserialize(serialized)[0];
	unpackedFunc("abc").should.equal("abc");
});