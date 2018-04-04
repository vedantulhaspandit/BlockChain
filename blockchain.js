const sha256 = require('js-sha256');
const Block = require('./block');

class Blockchain {

  constructor(genesisBlock) { // genesisBlock has initial configuration; is the first block
    this.blocks = [];
    this.addBlock(genesisBlock);
  }


  addBlock(block) {
    if(this.blocks.length == 0) {
      block.previousHash = "0000000000000000"; // np previous hash for genesis block
      block.hash = this.generateHash(block); // new hash for current block
    }
    this.blocks.push(block)
  }

  generateHash(block) {
    let hash = sha256(block.key);

    while(!hash.startsWith("0000")) { // calculation to satisfy the condition for finding hash (Prof of work - reward)
      block.nonce += 1
      hash = sha256(block.key)
      console.log(hash)
    }

    return hash;
  }

  // func called for each block we want to be mined
  getNextBlock(transactions) {
       let block = new Block();

       transactions.forEach(function(transaction){ // adding transactions for a specific block
         block.addTransaction(transaction)
       });

       let previousBlock = this.getPreviousBlock();
       block.index = this.blocks.length;
       block.previousHash = previousBlock.hash;
       block.hash = this.generateHash(block);

       return block;
   }

  getPreviousBlock() {
    return this.blocks[this.blocks.length - 1]
  }

}

module.exports = Blockchain;
