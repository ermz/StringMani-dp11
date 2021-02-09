const Strings = artifacts.require("Strings");

const chai = require("chai");
const expect = chai.expect;

const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

contract("Strings", async accounts => {
	let [onlyUser] = accounts;

	let strings = null;

	before(async () => {
		strings = await Strings.deployed();
	})

	it("Should return length of string", async () => {
		let result = parseInt(await strings.length('hello'));
		return expect(result).to.equal(5);
	});

	it("Should concatenate two strings", async () => {
		let result = await strings.concatenate("YO", "MAMA");
		return expect(result).to.equal("YOMAMA");
	});
});