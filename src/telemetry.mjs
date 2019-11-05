import driver from 'bigchaindb-driver'
import bip39 from 'bip39'
import Orm from 'bigchaindb-orm'

const API_PATH = 'https://test.bigchaindb.com/api/v1/'
const conn = new driver.Connection(API_PATH)

const seed = bip39.mnemonicToSeed('seedPhrase').slice(0,32)
const alice = new driver.Ed25519Keypair(seed)

// Decentralized IDentifer for self-sovereign identity verification
class DID extends Orm {
	constructor(entity) {
		super(API_PATH)
		this.entity = entity
	}
}

const car = new driver.Ed25519Keypair()
const sensorGPS = new driver.Ed25519Keypair()

const userDID = new DID(alice.publicKey)
const carDID = new DID(car.publicKey)
const gpsDID = new DID(sensorGPS.publicKey)

userDID.define("myModel", "https://schema.org/v1/myModel")
carDID.define("myModel", "https://schema.org/v1/myModel")
gpsDID.define("myModel", "https://schema.org/v1/myModel")


