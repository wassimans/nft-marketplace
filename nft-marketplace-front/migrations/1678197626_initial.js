const NftMarket = artifacts.require("NftMarket.sol");

module.exports = function (_deployer) {
  _deployer.deploy(NftMarket);
};
