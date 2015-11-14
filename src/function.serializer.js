import Serializer from "./serializer";
import isNative from "lodash.isnative";

export default class FunctionSerializer extends Serializer {

	constructor() {
		super("function");
	}

	isRelevant(value) {
		var result = false;
		if ("function" === typeof value) {
			result = true;
			if (isNative(value)) {
				// TODO: Wrap.
				result = false;
			}
		}
		return result;
	}

	_pack(value) {
		return value.toString();
	}

	_unpack(value) {
		var result = new Function("return " + value)();
        return result;
	}
}