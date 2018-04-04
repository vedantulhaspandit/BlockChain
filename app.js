const Block = require('./block');
const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let transaction = new Transaction('Mary','Jerry',100);
let block = blockchain.getNextBlock([transaction]); // on enterprise level, multiple transactions will be present
blockchain.addBlock(block);

let anotherTransaction = new Transaction("Tom","Jerry",10)
let block1 = blockchain.getNextBlock([anotherTransaction,transaction])
blockchain.addBlock(block1)

console.log(blockchain);
