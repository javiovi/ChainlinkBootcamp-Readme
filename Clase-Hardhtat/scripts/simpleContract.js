const hre = require("haedhat")

async function main(){
    const SimpleContractFactory = await hre.ethers.getContractFactory("SimpleContract");
    const simpleContract = await SimpleContractFactory.deploy();
    await simpleContract.deployed();

    console.log("El address del contrato es : ", simppleContract.address);
     

    const tx = await simpleContract.setName("Javier - Bootcamp hHArdhat")
    const name = await simpleContract.name();

    console.log("el name es : ", name);

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  