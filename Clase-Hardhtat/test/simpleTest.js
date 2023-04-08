const {expect } = require("chai");

describe("Basic test - Bootcamp Español 2023", function(){
    async function deploySmartContract(){
        const [owner, otherAccount] = await ethers.getSigners()

        const simpleFactory = await ethers.getContractFactory("Simple Contract")
        const simple = await simpleFactory.deploy();
        await simple.deployed();

        return {simple};

    }

    describe("Deployement", function(){
        it("Should deploy successfully", async function(){
            const {simple} = await deploySmartContract();
            console.log("El address del contracto es : ", simple.address)
            expect(simple.address).to.not.be.null;
});
it("Should update the name", async function(){
    const {simple} = await deploySmartContract();
    const tx = await simple.setName("Javi");
    const name = await simple.name();
    expect(name).to.be.equal("Javi")
});

    })
})