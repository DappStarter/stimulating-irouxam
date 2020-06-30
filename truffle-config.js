require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin entire orange typical'; 
let testAccounts = [
"0x444f8a34a954b9dbce4c05e484adde2bed5b71cf25726e37c9d8d771180fbcef",
"0x89b1f72566ca955184590edb44f21d88a6275eb0a6afaf09809e039ce1a924cf",
"0xea518d272f9f82d30697ed8c2e71130ad40649b0c5b6394efb25aa7e90cc19b7",
"0xb457b511d61311422fb421e8411105fe8b1541c932677f5da239dc3fc47f8b2b",
"0x40519afd107fdb4baf5d506d49cfe2788554962dd2bc21b9bfa3021a2f900070",
"0x570dcebb8c604596574154d14362f4b69db09cf520b7d2fa7fce9e45d090f532",
"0x386230de74c52dea755544e0fd9e46f9b1d94fe57c7a5df766c9bdfc543232da",
"0xcd599297f49366458b45fca3498c3321b9ec6a680f33219cf0a6b05424da4058",
"0x41228dbc939da0b623f07aa5d0b5bad41a5cc4f5e3bb8dd78fab13b17177f664",
"0xb7f95184cbcf775c3ffea82212611188178e3de7ef0ca331d34b681ea526844f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
