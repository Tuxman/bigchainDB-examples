const BigchainDB = require('bigchaidb-driver')
const big39 = require('bip39')

const API_PATH = 'https://test.bigchaindb.com/api/v1/'
const conn = new BigchainDB.Connection(API_PATH)

const seed = bip39.mnemonicToSeed('seedPhrase').slice(0,32)
const alice = new BigchainDB.Ed25519Keypair(seed)
