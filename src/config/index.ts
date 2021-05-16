import dev from './dev'
import production from './production'

const current = process.env.NODE_ENV === 'development' ? dev : production

export default current
