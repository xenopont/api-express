import productionConfig from './production'
import environments from '../core/app/environments'

const devConfig = { ...productionConfig }

devConfig.PORT = 3000
devConfig.currentEnvironment = environments.development
devConfig.db.connectionString = `mongodb://api-mongo:27017/${devConfig.db.dbName}`

export default devConfig
