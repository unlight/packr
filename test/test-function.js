import test from "ava";
import {serialize, deserialize} from "..";

test("function contains body", t => {
	var [value] = serialize(function(b) {
		return b;
	});
	t.ok(value.data.indexOf("return b") !== -1);
	t.end();
});

test("function return first argument", t => {
	var fn = function(b) {
		return b;
	};
	var [unpackedFunc] = deserialize(...serialize(fn));
	t.ok(unpackedFunc("abc") === "abc");
	t.end();
});