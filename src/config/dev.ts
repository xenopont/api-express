import productionConfig from './production'

const currentConfig = { ...productionConfig }

currentConfig.PORT = 3000
currentConfig.currentEnvironment = productionConfig.environments.dev
currentConfig.db.connectionString = `mongodb://api-mongo:27017/${currentConfig.db.dbName}`

export default currentConfig
