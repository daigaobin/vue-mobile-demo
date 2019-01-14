import login from './login'
import product from './product'
import prescription from './prescription'
import statistics from './statistics'

export default {
  ...login,
  ...product,
  ...prescription,
  ...statistics
}

