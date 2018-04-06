// url is used to differntiate between nodes. eg: localhost:3000, localhost:3001 will represent 2 different nodes (servers)
class BlockchainNode { // representa node (server) on blockchain
  constructor(url) {
    this.url = url;
  }
}

module.exports = BlockchainNode;
