import Serializer from "./serializer";
import PrimitiveSerializer from "./primitive.serializer";
import FunctionSerializer from "./function.serializer";

var serializer = new Serializer();
serializer.addNext(new FunctionSerializer());
serializer.addNext(new PrimitiveSerializer());

var assignedSerialize = serializer.serialize.bind(serializer);
var assignedDeserialize = serializer.deserialize.bind(serializer);

function transform(func, args) {
	var result = new Array(args.length);
	for (var i = 0; i < args.length; i++) {
		var value = args[i];
		result[i] = func(value);
	}
	return result;
}

export function serialize() {
	return transform(assignedSerialize, arguments);
}

export function deserialize() {
	return transform(assignedDeserialize, arguments);
}