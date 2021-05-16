import environments from '../core/app/environments'

const db = {
    connectionString: 'not configured',
    dbName: 'api-db',
    collections: {
    },
}

export default {
    PORT: process.env.PORT || 80,

    currentEnvironment: environments.prod,
    db,
}
