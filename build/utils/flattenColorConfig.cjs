function flattenColorConfig (config) {
  const flatConfig = {}

  function processConfig (obj, prefix = '') {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        const newKey = prefix ? `${prefix}${key}` : key
        flatConfig[newKey] = obj[key]
      }
      else if (typeof obj[key] === 'object') {
        const newPrefix = prefix ? `${prefix}.${key}` : key
        processConfig(obj[key], newPrefix)
      }
    }
  }

  processConfig(config)

  return flatConfig
}

module.exports = flattenColorConfig
