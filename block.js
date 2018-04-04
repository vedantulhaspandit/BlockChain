// represents a block in the blockchain
class Block {

  constructor() {
    this.index = 0; // posn of block inside blockchain
    this.previousHash = "";
    this.hash = "";
    this.nonce = 0;
    this.transactions = []; // a block has list of transactions
  }

  get key() { // will be used to create SHA 256 - hash
    return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

module.exports = Block;
