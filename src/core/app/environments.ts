import { Dictionary } from '../types/Dictionary';

const PRODUCTION = 'production'
const DEVELOPMENT = 'development'
const TEST = 'test'

const environments: Dictionary<string> = {
    dev: DEVELOPMENT,
    development: DEVELOPMENT,
    prod: PRODUCTION,
    production: PRODUCTION,
    test: TEST,
}

export default environments
