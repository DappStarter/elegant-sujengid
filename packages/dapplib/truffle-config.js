require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth soccer pull grace industry surge silly'; 
let testAccounts = [
"0x70944342f56ec33a1abc28174e0f720b3e5611494dde0bef086ade8e1262c6c0",
"0x9484e1a5f4a88c3aef39098b80aa2dd6dd8e2f6f62009b781870ab8d573e137b",
"0xfe934bdbeaa49ed481e7338370b0399e40cce922ecb9c7b46b9bc8bbc14e3d16",
"0xad0beaa738bf48121fc4e05accb2cb5fae7547d80eb6b8346e804886d8ca0c49",
"0xbc780bcb369c8618b76637d2356b692ebaafd66fdb10735045e0514d0fb3e048",
"0x7eaadaa9509e6528c34c736cf90b5d0dde1fd8f1bc6a2105d4482bad2c754e19",
"0x34e45e148d4d83e1f0eae66d7e9827e74c7df8058375769d343437cac0283e7d",
"0x0f18472f58a66b4ce5226d93460d473c2b040464a3892c41c901be01a38922a0",
"0xd6371a5358c4a5d12b1b43ed62abc45f1790885433e1ef4812668a5b8b58b30a",
"0xff48d9a7ae693c0a0c434737f424912eb313cd9a28b8a8afd7c3e5a9213a917e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
