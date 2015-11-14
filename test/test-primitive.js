import test from "ava";
import {serialize, deserialize} from "..";

test("null", t => {
	var [value] = serialize(null);
	t.ok(value.data === "null");
	t.end();
});

test("number", t => {
	var [value] = serialize(1);
	t.ok(value.data === "1");
	t.end();
});

test("string", t => {
	var [value] = serialize("a");
	t.ok(value.data === "\"a\"");
	t.end();
});