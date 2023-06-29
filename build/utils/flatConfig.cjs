const config = require('../../src/config.json')

const flattenColorConfig = require('./flattenColorConfig.cjs')

module.exports = flattenColorConfig(config)
