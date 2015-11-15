import Serializer from "./serializer";
import PrimitiveSerializer from "./primitive.serializer";
import FunctionSerializer from "./function.serializer";

var s = new Serializer();
s.addNext(new FunctionSerializer());
s.addNext(new PrimitiveSerializer()); // Last item in chain.

var funcSerialize = s.serialize.bind(s);
var funcDeserialize = s.deserialize.bind(s);

export function serialize() {
	return [...arguments].map(funcSerialize);
}

export function deserialize(args) {
	return args.map(funcDeserialize);
}