import driver from 'bigchaindb-driver'
import bip39 from 'bip39'

const API_PATH = 'https://test.bigchaindb.com/api/v1/'
const conn = new driver.Connection(API_PATH)

const seed = bip39.mnemonicToSeed('seedPhrase').slice(0,32)
const alice = new driver.Ed25519Keypair(seed)
