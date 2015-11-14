import toSrc from "toSrc";

export default class Serializer {

	constructor(type) {
		Object.defineProperty(this, "type", {
			value: type,
			writable: false,
			enumerable: true
		});
	}

	addNext(newSerializer) {
		if (this.nextSerializer) {
			return this.nextSerializer.addNext(newSerializer);
		}
		this.nextSerializer = newSerializer;
		return newSerializer;
	}

	_pack(value) {
		throw new Error("Serializer._pack not implemented.");
	}

	_unpack(value) {
		// console.trace("x");
		throw new Error("Serializer._unpack not implemented.");
	}

	isRelevant(value) {
		return false;
	}

	serialize(value) {
		if (this.isRelevant(value)) {
			return {
				type: this.type,
				data: this._pack(value)
			}
		}
		if (this.nextSerializer) {
			var result = this.nextSerializer.serialize(value);
			return result;
		}
		throw new TypeError("Cannot serialize this value: " + toSrc(value));
	}

	deserialize(packed) {
		if (this.type === packed.type) {
			return this._unpack(packed.data);
		}
		if (this.nextSerializer) {
			return this.nextSerializer.deserialize(packed);
		}
		throw new TypeError("Cannot deserialize this value: " + toSrc(packed.data));
	}
}