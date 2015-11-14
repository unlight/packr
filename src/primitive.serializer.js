import Serializer from "./serializer";

export default class PrimitiveSerializer extends Serializer {

	constructor() {
		super("primitive");
	}

	isRelevant(value) {
		var result = false;
		switch (typeof value) {
			case "undefined":
			case "boolean":
			case "number":
			case "string":
			case "object":
				// TODO: Improve.
				result = true;
				break;
		}
		return result;
	}

	_pack(value) {
		return JSON.stringify(value);
	}

	_unpack(value) {
		return JSON.parse(value);
	}

}